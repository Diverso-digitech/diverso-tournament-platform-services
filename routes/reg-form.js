import { Router } from "express";
import { registrationForm } from "../services/reg-form.js";
const regFormRoutes = Router();

regFormRoutes.get("/registrationForm", (req, res) => {
  registrationForm(req, res);
});

export default regFormRoutes;
