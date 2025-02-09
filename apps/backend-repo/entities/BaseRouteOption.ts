import type { Express } from "express";
import { BaseApp } from "./BaseApp";

export interface BaseRouteOption extends BaseApp {
  server: Express;
}
