declare namespace Express {
  export interface Request extends Express.Request {
    user: UserEntity | null;
  }
}
