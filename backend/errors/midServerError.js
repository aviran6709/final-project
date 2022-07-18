module.exports = (err, req, res, next) => {
  const { message } = err;
  const statusCode = err.statusCode ? err.statusCode: 500;
  res
    .status(statusCode)
    .send({
      message: statusCode === 500
        ? 'error occurred on the server @'
        : message,
    });
};
