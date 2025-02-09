import { BaseApp } from "@/entities/BaseApp";
import { BaseService } from "@/entities/BaseService";
import { UserEntity } from "@/entities/User";
import { UserRepository } from "@/repository/User";

/**
 * Based on Clean code architecture, Service used for main business logic
 */
class UserService extends BaseService {
  private readonly userRepository: UserRepository;

  constructor(app: BaseApp) {
    super(app);
    this.userRepository = new UserRepository(app.db);
  }

  fetchUserData = async (email: string) => {
    const user = await this.userRepository.findOneByEmail(email);
    return user;
  };

  updateUserData = async (payload: UserEntity) => {
    const user = await this.userRepository.updateUser(payload);
    return user;
  };
}

export default UserService;
