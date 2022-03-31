import { formatResponse } from "../utils/common.js";
import { formSchema, regFormGenerator } from "../utils/schema.js";

function registrationForm(req, res) {
  formatResponse(res, 200, regFormGenerator(formSchema), false);
}

function registrationFormPostReq(req, res) {
  formatResponse(res, 200, {}, false);
}

export { registrationForm, registrationFormPostReq };
