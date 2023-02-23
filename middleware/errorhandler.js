const { responseFun } = require("../helper/response");

class errorHandler extends Error {
  constructor(statusCode, success, message, data, res) {
    super(message)
    responseFun(statusCode, success, message, data, res);
  }
}

module.exports = errorHandler;