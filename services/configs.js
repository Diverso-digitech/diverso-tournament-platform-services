import { API, ADMIN_APIS } from "../constants/apiConstants.js";
import { formatResponse } from "../utils/common.js";

function getAppConfig(req, res) {
  formatResponse(
    res,
    200,
    {
      endpointsUrl: API.ENDPOINTS_CONFIG,
    },
    false
  );
}
function getPrivateConfig(req, res) {
  formatResponse(res, 200, {}, false);
}
function getEndpointsConfig(req, res) {
  formatResponse(
    res,
    200,
    {
      endpoints: { ...API, ...ADMIN_APIS },
    },
    false
  );
}
export { getAppConfig, getPrivateConfig, getEndpointsConfig };
