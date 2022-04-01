import { Router } from "express";
import { API } from "../constants/apiConstants.js";
import { homepageSchema } from "../frontend-schema/homepage/index.js";
const schemaRoutes = Router();

schemaRoutes.get(API.HOME_PAGE_SCHEMA, (req, res) => {
  homepageSchema(req, res);
});

export default schemaRoutes;
