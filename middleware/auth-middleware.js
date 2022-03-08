import { admin } from "../config/firebase-config.js";
import { Users } from "../models/user.js";
import jwt from "jsonwebtoken";
import { AUTH_SECRET } from "../env.js";
import { formatResponse } from "../utils/common.js";
import { MESSAGES, NAMES } from "../constants/messages.js";

class MiddlewareClass {
  requireAuth = (req, res, next) => {
    const token = req.cookies[NAMES.JWT_COOKIE];
    if (token) {
      jwt.verify(token, AUTH_SECRET, (err, decodedToken) => {
        console.log(err);
        if (err) {
          formatResponse(res, 501, {}, true, MESSAGES.NOT_AUTHORIZED);
        } else {
          next();
        }
      });
    } else {
      formatResponse(res, 501, {}, true, MESSAGES.NOT_AUTHORIZED);
    }
  };

  // check current user
  checkUser = (req, res, next) => {
    const token = req.cookies.jwt;

    if (token) {
      jwt.verify(token, AUTH_SECRET, async (err, decodedToken) => {
        if (err) {
          res.locals.user = null;
          next();
        } else {
          let user = await Users.findById(decodedToken.id);
          res.locals.user = user;
          next();
        }
      });
    } else {
      res.locals.user = null;
      next();
    }
  };
}

export { MiddlewareClass };