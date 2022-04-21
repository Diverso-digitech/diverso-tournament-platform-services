import { Router } from "express";
import { API } from "../constants/apiConstants.js";
import { homepageSchema } from "../frontend-schema/homepage/index.js";
// import { sponsorsSectionSchema } from "../frontend-schema/sponsorsSection/index.js";
import { tournamentsPageSchema } from "../frontend-schema/tournamentsPage/index.js";
const schemaRoutes = Router();

schemaRoutes.get(API.HOME_PAGE_SCHEMA, (req, res) => {
  homepageSchema(req, res);
});

// schemaRoutes.get(API.TOURNAMENT_INFO_SCHEMA, (req, res) => {
//   tournamentInfoSchema(req, res)
// });

schemaRoutes.get(API.TOURNAMENTS_PAGE_SCHEMA, (req, res) => {
  tournamentsPageSchema(req, res)
});

export default schemaRoutes;
