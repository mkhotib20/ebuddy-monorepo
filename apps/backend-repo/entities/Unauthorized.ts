import { ApiError } from "./ApiError";

export class Unauthorized extends ApiError {
  constructor(message: string) {
    super(message, 401);
  }
}
