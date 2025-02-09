import { UserController } from "@/controller/User";
import type { BaseRouteOption } from "@/entities/BaseRouteOption";
import { AuthMiddleware } from "@/middleware/Auth";
import asyncHandler from "express-async-handler";

const userRoutes = (app: BaseRouteOption) => {
  const { server } = app;

  const authMiddleware = new AuthMiddleware(app);

  const userController = new UserController(app);

  server.get(
    "/fetch-user-data",
    asyncHandler(authMiddleware.authenticated),
    asyncHandler(userController.handleFetchUserData)
  );
  server.patch(
    "/update-user-data",
    asyncHandler(authMiddleware.authenticated),
    asyncHandler(userController.handleUpdateUserData)
  );
};

export default userRoutes;
