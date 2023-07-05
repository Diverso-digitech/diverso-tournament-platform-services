import { Router } from "express";
import { ADMIN_APIS } from "../../constants/apiConstants.js";
import { createTournament } from "../../services/admin/manage-tournaments.js";

const tournamentRoutes = Router();

tournamentRoutes.post(ADMIN_APIS.CREATE_TOURNAMENT, (req, res) =>
  createTournament(req, res)
);

export default tournamentRoutes;
