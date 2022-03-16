import { Users } from "../models/index.js";
import { formatResponse } from "../utils/common.js";
import { JWT_MAX_AGE, MESSAGES, NAMES } from "../constants/messages.js";
import { createToken } from "../utils/jwt.js";

async function registerUser(req, res) {
  try {
    const { mobile, ftoken } = req?.body;
    if (!mobile) {
      formatResponse(res, 501, {}, true, MESSAGES.REQUIRED_DATA);
    }

    let user = await Users.findOne({ mobile: mobile })
      .select({ mobile: 1 })
      .lean();

    if (!user) {
      const newUserObject = {
        mobile,
        ftoken,
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
