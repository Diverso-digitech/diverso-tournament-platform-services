// Generic error handler used by all endpoints.
export const handleError = (res, reason, message, code) => {
  console.log("ERROR: " + reason);
  res.status(code || 500).json({
    message: message,
    reason: reason,
    code: code,
  });
};

export const handleResponse = (res, data, message, code) => {
  res.status(code || 500).json({
    message: message,
    data: data,
    code: code,
  });
};

export const formatResponse = (res, code, data, err, message) => {
  res.json({
    data,
    meta: {
      status: err ? false : true,
      error: Boolean(err),
      messageID: 1,
      message,
    },
  });
};
