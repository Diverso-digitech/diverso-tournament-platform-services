import mongoose from "mongoose";

const Schema = mongoose.Schema;
const Types = Schema.Types;

const TournamentSchema = new Schema({
  tournamentName: { type: Types.String, trim: true, required: true },
  numberOfPlayers: { type: Types.String, trim: true, required: true },
});

export const Tournament = mongoose.model(
  "Tournament",
  TournamentSchema,
  "Tournament"
);
