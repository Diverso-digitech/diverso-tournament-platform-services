import mongoose from "mongoose";

const Schema = mongoose.Schema;
const Types = Schema.Types;

const userSchema = new Schema({
  mobile: { type: Types.String, trim: true, required: true, unique: true },
  ftoken: { type: Types.String, trim: true, required: true, unique: true },
  name: {
    type: Types.String,
    trim: true,
    required: false,
    minlength: 4,
    maxlength: 15,
    text: true,
  },
  joiningDate: { type: Types.Date, required: true },
});

export const Users = mongoose.model("user", userSchema, "users");
