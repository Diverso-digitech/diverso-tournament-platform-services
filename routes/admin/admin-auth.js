import { Router } from "express";
import { ADMIN_APIS } from "../../constants/apiConstants.js";
import {
  adminLogin,
  adminLogout,
  adminSignup,
} from "../../services/admin/admin-auth.js";

const adminAuthRoutes = Router();

adminAuthRoutes.post(ADMIN_APIS.ADMIN_SIGNUP, (req, res) =>
  adminSignup(req, res)
);
adminAuthRoutes.post(ADMIN_APIS.ADMIN_LOGIN, (req, res) =>
  adminLogin(req, res)
);
adminAuthRoutes.post(ADMIN_APIS.ADMIN_LOGOUT, (req, res) =>
  adminLogout(req, res)
);

export default adminAuthRoutes;
