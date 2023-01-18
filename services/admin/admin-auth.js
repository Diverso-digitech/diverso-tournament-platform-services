import { MESSAGES } from "../../constants/messages.js";
import { Admin } from "../../models/admin/Admin.js";
import { formatResponse } from "../../utils/common.js";
import { createToken } from "../../utils/jwt.js";

async function adminSignup(req, res) {
  try {
    const { mobile, email, name, organizationName, password } = req?.body;
    if (!mobile || !name || !organizationName || !email || !password) {
      return formatResponse(res, 501, {}, true, MESSAGES.REQUIRED_DATA);
    }

    let admin = await Admin.findOne({ mobile, email })
      .select({ mobile: 1 })
      .lean();

    if (admin) {
      return formatResponse(
        res,
        501,
        {},
        true,
        MESSAGES.EMAIL_OR_PHONE_ALREADY_USED
      );
    } else {
      const newAdminObject = {
        mobile,
        email,
        name,
        organizationName,
        password,
        joiningDate: new Date(),
      };
      const NewAdminDocument = new Admin(newAdminObject);
      admin = await NewAdminDocument.save();
    }

    const token = createToken(admin._id);

    return formatResponse(
      res,
      200,
      { ...admin?._doc, token },
      false,
      MESSAGES.SUCCESS
    );
  } catch (err) {
    console.log(err);
    return formatResponse(res, 501, {}, true, MESSAGES.SERVER_ERROR);
  }
}

async function adminLogin(req, res) {
  const { email, password } = req.body;

  try {
    const admin = await Admin.login(email, password);
    const token = createToken(user._id);

    return formatResponse(
      res,
      200,
      { ...admin?._doc, token },
      false,
      MESSAGES.SUCCESS
    );
  } catch (err) {
    return formatResponse(res, 501, {}, true, MESSAGES.WRONG_EMAIL_OR_PASSWORD);
  }
}
async function adminLogout(req, res) {}

export { adminSignup, adminLogin, adminLogout };
