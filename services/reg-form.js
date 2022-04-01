import { MESSAGES } from "../constants/messages.js";
import { Register } from "../models/registration.js";
import { formatResponse } from "../utils/common.js";
import { formSchema, regFormGenerator } from "../utils/schema.js";

function registrationForm(req, res) {
  formatResponse(res, 200, regFormGenerator(formSchema), false);
}

async function registrationFormPostReq(req, res) {
  const { formInpData, tournamentId } = req.body;

  const modifiedInpData = {};

  Object.keys(formInpData).map((item) => {
    modifiedInpData[item] = { value: formInpData[item].value };
  });

  const NewUserDocument = new Register({
    tournamentId,
    formInpData: modifiedInpData,
  });

  await NewUserDocument.save();
  return formatResponse(res, 200, {}, false, MESSAGES.SUCCESS);
}

export { registrationForm, registrationFormPostReq };
