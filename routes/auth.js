import express from "express";
import { registerUser } from "../services/index.js";
import { MiddlewareClass } from "../middleware/auth-middleware.js";

const router = express.Router();

const Middleware = new MiddlewareClass();

router.post("/register", Middleware.decodeToken, (req, res) =>
  registerUser(req, res)
);

export default router;
