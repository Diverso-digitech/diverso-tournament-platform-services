import { Router } from "express";
import { API } from "../constants/apiConstants.js";
import {
  homepageChipsSchema,
  homepageSchema,
  homepageTrendingGamesSchema,
} from "../frontend-schema/homepage/index.js";
const schemaRoutes = Router();

schemaRoutes.get(API.HOME_PAGE_SCHEMA, (req, res) => {
  homepageSchema(req, res);
});

schemaRoutes.get(API.HOME_PAGE_CHIPS_SCHEMA, (req, res) => {
  homepageChipsSchema(req, res);
});

schemaRoutes.get(API.HOME_PAGE_TRENDING_GAMES_SCHEMA, (req, res) => {
  homepageTrendingGamesSchema(req, res);
});

export default schemaRoutes;
