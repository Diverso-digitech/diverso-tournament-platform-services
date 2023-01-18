import { Router } from "express";
import { API } from "../constants/apiConstants.js";
import {
  getAppConfig,
  getEndpointsConfig,
  getPrivateConfig,
} from "../services/configs.js";
const configsRoutes = Router();

configsRoutes.get(API.GLOBAL_CONFIG, (req, res) => getAppConfig(req, res));
configsRoutes.get(API.PRIVATE_CONFIG, (req, res) => getPrivateConfig(req, res));
configsRoutes.get(API.ENDPOINTS_CONFIG, (req, res) =>
  getEndpointsConfig(req, res)
);

export default configsRoutes;
