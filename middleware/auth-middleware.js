import { admin } from "../config/firebase-config.js";
import { Users } from "../models/user.js";
import jwt from "jsonwebtoken";
import { AUTH_SECRET } from "../env.js";
import { formatResponse } from "../utils/common.js";
import { MESSAGES, NAMES } from "../constants/messages.js";
import { createToken } from "../utils/jwt.js";

class MiddlewareClass {
  requireAuth = (req, res, next) => {
    // const token = req.cookies[NAMES.JWT_COOKIE];
    const token = req.headers["authorization"].split(" ")[1];

    if (token) {
      jwt.verify(token, AUTH_SECRET, (err, decodedToken) => {
        if (err) {
          formatResponse(res, 501, {}, true, MESSAGES.NOT_AUTHORIZED);
        } else {
          if (Date.now() >= decodedToken.exp * 1000) {
            this.renewJWT(req, res, next);
          } else {
            next();
          }
        }
      });
    } else {
      formatResponse(res, 501, {}, true, MESSAGES.NOT_AUTHORIZED);
    }
  };

  // check current user
  checkUser = (req, res, next) => {
    // const token = req.cookies[NAMES.JWT_COOKIE];

    const token = req.headers["authorization"].split(" ")[1];

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

  verifyFirebaseToken = async (req, res, next) => {
    const { ftoken } = req.body;
    if (!ftoken) {
      formatResponse(res, 501, {}, true, MESSAGES.NO_FIREBASE_TOKEN_FOUND);
    }

    try {
      const decodeValue = await admin.auth().verifyIdToken(ftoken);
      if (decodeValue) {
        req.body.mobile = decodeValue.phone_number;
        next();
        return;
      }
      formatResponse(res, 501, {}, true, MESSAGES.NOT_AUTHORIZED);
    } catch (e) {
      formatResponse(res, 501, {}, true, MESSAGES.SERVER_ERROR);
    }
  };

  renewJWT = async (req, res, next) => {
    const user = res?.locals?.user;
    console.log(user);
    const decodeValue = await admin.auth().verifyIdToken(user?.ftoken);

    if (decodeValue) {
      const token = createToken(user?._id);
      res.cookie(NAMES.JWT_COOKIE, token, {
        httpOnly: true,
        maxAge: JWT_MAX_AGE,
      });
      next();
    } else {
      formatResponse(res, 501, {}, true, MESSAGES.NOT_AUTHORIZED);
    }
  };
}

export { MiddlewareClass };
