import { Users } from "../models/index.js";
import { formatResponse } from "../utils/common.js";
import jwt from "jsonwebtoken";
import { AUTH_SECRET } from "../env.js";
import { JWT_MAX_AGE, MESSAGES, NAMES } from "../constants/messages.js";

const createToken = (id) => {
  return jwt.sign({ id }, AUTH_SECRET, {
    expiresIn: JWT_MAX_AGE,
  });
};

async function registerUser(req, res) {
  try {
    const { mobile } = req?.body;
    if (!mobile) {
      formatResponse(res, 501, {}, true, MESSAGES.REQUIRED_DATA);
    }

    let user = await Users.findOne({ mobile: mobile })
      .select({ mobile: 1 })
      .lean();

    if (!user) {
      const newUserObject = {
        mobile,
        joiningDate: new Date(),
      };
      const NewUserDocument = new Users(newUserObject);
      user = await NewUserDocument.save();
    }

    const token = createToken(user._id);
    res.cookie(NAMES.JWT_COOKIE, token, {
      httpOnly: true,
      maxAge: JWT_MAX_AGE,
    });

    formatResponse(res, 200, { user }, false, MESSAGES.SUCCESS);
  } catch (err) {
    formatResponse(res, 501, {}, true, MESSAGES.SERVER_ERROR);
  }
}

async function logoutUser(req, res) {
  res.cookie(NAMES.JWT_COOKIE, "", { maxAge: 1 });
  formatResponse(res, 200, {}, false, MESSAGES.SUCCESS);
}

export { registerUser, logoutUser };
