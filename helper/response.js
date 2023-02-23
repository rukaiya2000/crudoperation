const responseFun = (statusCode, success, message, data, res) => {
    const response = {
      success,
      message,
      data,
    };
    res.status(statusCode).send(response);
  };
  
  module.exports = { responseFun };