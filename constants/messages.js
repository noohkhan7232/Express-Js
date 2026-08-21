const MESSAGES = {
  AUTH: {
    MISSING_VALUES: "UserID(EMail) and Password are Required",
    INVALID_CREDENTIALS: "Ivalid UserID(EMail) and Password",
    LOGIN_SUCCESS: "Login Successful",
    LOG_OUT: "Logout Successful",
  },
  USER: {
    CREATED: "User Created Successfully",
    FETCHED: "User fetched Successfully",
    FETCHED_ALL: "All Users fetched Successfully",
    UPDATE: "Users Updated Successfully",
    DELETE: "Users Deleted Successfully",
    NOT_FOUND: "User not found",
  },
  COMMON: {
    INTERNAL_ERROR: "Something went wrong, please try again later",
    GENERAL: "Success",
    ERROR: "Error",
  },
};

module.exports = MESSAGES;
