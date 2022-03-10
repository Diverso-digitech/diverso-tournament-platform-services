import { Router } from "express";
import { registerUser, logoutUser } from "../services/index.js";
import { MiddlewareClass } from "../middleware/auth-middleware.js";
import { formatResponse } from "../utils/common.js";

const authRoutes = Router();

const Middleware = new MiddlewareClass();

authRoutes.post("/register", Middleware.verifyFirebaseToken, (req, res) => {
  registerUser(req, res);
});

authRoutes.get("/logout", (req, res) => {
  logoutUser(req, res);
});

authRoutes.get("/secret", Middleware.requireAuth, (req, res) => {
  formatResponse(res, 200, { secret: "12121212" }, false);
});

export default authRoutes;
