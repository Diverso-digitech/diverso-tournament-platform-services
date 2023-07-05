import { Tournament } from "../../models/admin/Tournament.js";

async function createTournament(req, res) {
  const { tournamentName, numberOfPlayers } = req.body;

  const NewTournamentDocument = new Tournament({
    tournamentName,
    numberOfPlayers,
  });

  const tournament = await NewTournamentDocument.save();
  return formatResponse(res, 200, tournament, false, MESSAGES.SUCCESS);
}

export { createTournament };
