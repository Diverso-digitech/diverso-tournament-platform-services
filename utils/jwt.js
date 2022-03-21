import { JWT_MAX_AGE } from "../constants/messages.js";
import { AUTH_SECRET } from "../env.js";
import jwt from "jsonwebtoken";

export const createToken = (id) => {
  return jwt.sign({ id }, AUTH_SECRET, {
    expiresIn: JWT_MAX_AGE,
  });
};
