import "module-alias/register";

import configureFirebase from "@/config/firebaseConfig";
import { logger, region } from "firebase-functions";

import { ApiError } from "@/entities/ApiError";
import authRoutes from "@/routes/auth";
import userRoutes from "@/routes/user";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import express, { Response } from "express";

const { db, auth } = configureFirebase();

const server = express();
server.use(cookieParser());

server.use(bodyParser.json());

userRoutes({ server, db, auth });
authRoutes({ server, db, auth });

server.use((err: ApiError, _: unknown, res: Response, _2: unknown) => {
  logger.error(err);
  res.status(err.statusCode || 500).json({
    statusCode: err.statusCode,
    message: err.message,
  });
});

if (process.env.NODE_LISTEN) {
  server.listen(3001);
}

export const webApi = region("asia-southeast1").https.onRequest(server);
