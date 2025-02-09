import type { BaseApp } from "./BaseApp";

export class BaseMiddleware {
  constructor(private readonly app: BaseApp) {}
}
