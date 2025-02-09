import { BaseApp } from "@/entities/BaseApp";

import { BaseService } from "@/entities/BaseService";
import { Unauthorized } from "@/entities/Unauthorized";
import { UserRepository } from "@/repository/User";
import parseError from "@/utils/parseError";

export class AuthService extends BaseService {
  private readonly userRepo: UserRepository;
  constructor(baseApp: BaseApp) {
    super(baseApp);
    this.userRepo = new UserRepository(baseApp.db);
  }

  validateUser = async (idToken: string) => {
    const decodedToken = await this.app.auth.verifyIdToken(idToken);

    if (!decodedToken?.email)
      throw new Unauthorized(
        "Unauthorized, you cannot access protected resource!"
      );

    const foundUser = await this.userRepo.findOneByEmail(decodedToken.email);
    return foundUser;
  };

  signinWithEmail = async (idToken: string) => {
    try {
      const decodedToken = await this.app.auth.verifyIdToken(idToken);
      const { name, email, picture } = decodedToken;
      await this.userRepo.onboardUser({ name, email: email || "", picture });
    } catch (error) {
      throw new Unauthorized(parseError(error));
    }
  };
}
