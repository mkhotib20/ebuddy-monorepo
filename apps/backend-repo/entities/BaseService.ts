import type { BaseApp } from "./BaseApp";

export class BaseService {
  constructor(protected readonly app: BaseApp) {}
}
