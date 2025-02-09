import { BaseApp } from "@/entities/BaseApp";
import dayjs from "dayjs";
import { Request, Response } from "express";

import { AUTH_COOKIE_NAME } from "@/config/authConfig";
import { BadRequestError } from "@/entities/BadRequest";
import { BaseController } from "@/entities/BaseController";
import { AuthService } from "@/services/Auth";

export class AuthController extends BaseController {
  private readonly authService: AuthService;

  constructor(baseApp: BaseApp) {
    super(baseApp);

    this.authService = new AuthService(baseApp);
  }

  loginWithEmail = async (req: Request, res: Response) => {
    const requestBody = req.query || {};

    if (!requestBody.idToken) {
      throw new BadRequestError("Token is required!");
    }

    await this.authService.signinWithEmail(requestBody.idToken.toString());

    res.cookie(AUTH_COOKIE_NAME, requestBody.idToken, {
      path: "/",
      httpOnly: true,
      expires: dayjs().add(3, "hour").toDate(),
    });

    res.status(302);
    res.redirect("/");
  };
  handleLogout = async (req: Request, res: Response) => {
    res.cookie(AUTH_COOKIE_NAME, "", {
      path: "/",
      httpOnly: true,
      // make this cookie expired
      expires: dayjs().subtract(1, "year").toDate(),
    });

    res.status(302);
    res.redirect("/login");
  };
}
