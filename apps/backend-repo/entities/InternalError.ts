import { ApiError } from "./ApiError";

export class InternalError extends ApiError {
  constructor(message: string) {
    super(message, 500);
  }
}
