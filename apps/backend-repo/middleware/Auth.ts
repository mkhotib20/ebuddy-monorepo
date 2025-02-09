import { AUTH_COOKIE_NAME } from "@/config/authConfig";
import { BaseApp } from "@/entities/BaseApp";
import { BaseMiddleware } from "@/entities/BaseMiddleware";

import { Unauthorized } from "@/entities/Unauthorized";
import { AuthService } from "@/services/Auth";
import { NextFunction, Request } from "express";
import { logger } from "firebase-functions/v1";

export class AuthMiddleware extends BaseMiddleware {
  private readonly authService: AuthService;
  constructor(baseApp: BaseApp) {
    super(baseApp);
    this.authService = new AuthService(baseApp);
  }

  authenticated = async (req: Request, _: unknown, next: NextFunction) => {
    const cookie = req.cookies[AUTH_COOKIE_NAME];
    if (!cookie) {
      throw new Unauthorized(
        "Unauthorized, you cannot access protected resource!"
      );
    }

    try {
      const userResult = await this.authService.validateUser(cookie);
      req.user = userResult;
    } catch (error) {
      logger.error(error);

      throw new Unauthorized(
        "Unauthorized, you cannot access protected resource!"
      );
    } finally {
      next();
    }
  };
}
