import { Router } from "express";
import { registerUser, logoutUser } from "../services/index.js";
import { MiddlewareClass } from "../middleware/auth-middleware.js";
import { formatResponse } from "../utils/common.js";
import { API } from "../constants/apiConstants.js";
const authRoutes = Router();

const Middleware = new MiddlewareClass();

authRoutes.post(API.REGISTER, Middleware.verifyFirebaseToken, (req, res) => {
  registerUser(req, res);
});

authRoutes.get(API.LOGOUT, Middleware.requireAuth, (req, res) => {
  logoutUser(req, res);
});

authRoutes.get(
  API.SECRET,
  Middleware.checkUser,
  Middleware.requireAuth,
  (req, res) => {
    formatResponse(res, 200, { secret: "12121212" }, false);
  }
);

export default authRoutes;
