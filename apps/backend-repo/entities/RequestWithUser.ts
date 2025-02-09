import type { Request } from "express";
import type { UserEntity } from "./User";

export interface RequestWithUser extends Request {
  user: UserEntity | null;
}
