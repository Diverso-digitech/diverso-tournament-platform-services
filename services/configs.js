import { API } from "../constants/apiConstants.js";
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
  formatResponse(
    res,
    200,
    {
      firebaseConfig: {
        apiKey: "AIzaSyBFC6l-njCw3Xr1JIq_oyBH-1DsW0ZXqAQ",
        authDomain: "diverso-gaming-platform.firebaseapp.com",
        projectId: "diverso-gaming-platform",
        storageBucket: "diverso-gaming-platform.appspot.com",
        messagingSenderId: "488170373720",
        appId: "1:488170373720:web:915abe2aea36400007402d",
        measurementId: "G-2TSYJZXXWM",
      },
    },
    false
  );
}
function getEndpointsConfig(req, res) {
  formatResponse(
    res,
    200,
    {
      endpoints: API,
    },
    false
  );
}
export { getAppConfig, getPrivateConfig, getEndpointsConfig };
