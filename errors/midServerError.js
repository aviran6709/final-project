module.exports = (err, req, res, next) => {
  let statusCode
    const {  message } = err;
    if(!err.statusCode)
    {
      statusCode = 500
    }
    statusCode = err.statusCode
     console.log(statusCode ,"<<<<<<<<<");
    res
      .status(statusCode)
      .send({
        message: statusCode === 500
          ? 'error occurred on the server @'
          : message,
      });
  };