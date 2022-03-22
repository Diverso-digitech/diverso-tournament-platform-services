import { Router } from "express";
import { API } from "../constants/apiConstants.js";
import { registrationForm } from "../services/reg-form.js";
import { MiddlewareClass } from "../middleware/auth-middleware.js";
const regFormRoutes = Router();

const Middleware = new MiddlewareClass();

regFormRoutes.get(API.REG_FORM, Middleware.requireAuth, (req, res) => {
  registrationForm(req, res);
});

export default regFormRoutes;
