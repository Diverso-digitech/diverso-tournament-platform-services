import mongoose from "mongoose";

const Schema = mongoose.Schema;
const Types = Schema.Types;

const registrationSchema = new Schema({
  tournamentId: { type: Types.String, trim: true, required: true },
  formInpData: [],
});

export const Register = mongoose.model(
  "registration",
  registrationSchema,
  "registrations"
);
