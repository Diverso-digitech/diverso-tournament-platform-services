import { Router } from "express";
import { API } from "../constants/apiConstants.js";
import {
  registrationForm,
  registrationFormPostReq,
} from "../services/reg-form.js";
import { MiddlewareClass } from "../middleware/auth-middleware.js";
const regFormRoutes = Router();

const Middleware = new MiddlewareClass();

regFormRoutes.get(API.REG_FORM, Middleware.requireAuth, (req, res) => {
  registrationForm(req, res);
});
regFormRoutes.post(API.REG_FORM, Middleware.requireAuth, (req, res) => {
  registrationFormPostReq(req, res);
});

export default regFormRoutes;
