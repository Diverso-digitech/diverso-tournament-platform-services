import { Router } from "express";
import { API } from "../constants/apiConstants.js";
import { homepageSchema } from "../frontend-schema/homepage/index.js";
import { sponsorsSectionSchema } from "../frontend-schema/sponsorsSection/index.js";
const schemaRoutes = Router();

schemaRoutes.get(API.HOME_PAGE_SCHEMA, (req, res) => {
  homepageSchema(req, res);
});

schemaRoutes.get(API.SPONSORS_SECTION_SCHEMA, (req, res) => {
  sponsorsSectionSchema(req, res)
});

export default schemaRoutes;
