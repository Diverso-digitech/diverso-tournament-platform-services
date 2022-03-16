import { Router } from "express";
import { registerUser, logoutUser } from "../services/index.js";
import { MiddlewareClass } from "../middleware/auth-middleware.js";
import { formatResponse } from "../utils/common.js";
import { regForm } from "../utils/dummy.js";
const authRoutes = Router();

const Middleware = new MiddlewareClass();

authRoutes.post("/register", Middleware.verifyFirebaseToken, (req, res) => {
  registerUser(req, res);
});

authRoutes.get("/logout", Middleware.requireAuth, (req, res) => {
  logoutUser(req, res);
});

authRoutes.get(
  "/secret",
  Middleware.checkUser,
  Middleware.requireAuth,
  (req, res) => {
    formatResponse(res, 200, { secret: "12121212" }, false);
  }
);

authRoutes.get(
  "/registrationForm",
  Middleware.checkUser,
  Middleware.requireAuth,
  (req, res) => {
    formatResponse(res, 200, regForm, false);
  }
);

export default authRoutes;
