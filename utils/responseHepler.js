const STATUS_CODES = require("../constants/statusCodes");
const MESSAGES = require("../constants/messages");

const sendSuccess = (
  res,
  statusCode = STATUS_CODES.OK,
  message = MESSAGES.COMMON.GENERAL,
  data = null,
) => {
  return res.status(statusCode).json({
    success: true,
    statusCode,
    message,
    data,
  });
};

const sendError = (
  res,
  statusCode = STATUS_CODES.COMMON.INTERNAL_ERROR,
  message = MESSAGES.COMMON.ERROR,
  error = null,
) => {
  return res.status(statusCode).json({
    success: false,
    statusCode,
    message,
    error,
  });
};

module.exports = { sendSuccess, sendError };
