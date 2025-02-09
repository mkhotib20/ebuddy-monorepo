import { AuthController } from "@/controller/Auth";
import type { BaseRouteOption } from "@/entities/BaseRouteOption";
import asyncHandler from "express-async-handler";

const authRoutes = (app: BaseRouteOption) => {
  const { server } = app;

  const authController = new AuthController(app);

  server.get("/auth/login", asyncHandler(authController.loginWithEmail));
  server.get("/auth/logout", asyncHandler(authController.handleLogout));
};

export default authRoutes;
