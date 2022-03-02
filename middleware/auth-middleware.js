import { admin } from "../config/firebase-config.js";

class MiddlewareClass {
  async decodeToken(req, res, next) {
    const { token } = req.body;
    try {
      const decodeValue = await admin.auth().verifyIdToken(token);
      if (decodeValue) {
        req.user = decodeValue;
        return next();
      }
      return res.json({ message: "Not Authorized" });
    } catch (e) {
      return res.json({ message: "Internal Error" });
    }
  }
}

export { MiddlewareClass };
