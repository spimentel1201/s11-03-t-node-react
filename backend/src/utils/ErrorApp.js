const ErrorApp = (message, statusCode) => {
  const error = new Error(message);
  error.statusCode = statusCode;
  error.status = `${statusCode}`.startsWith('4') ? 'fail' : 'error';
  Error.captureStackTrace(error, ErrorApp);
  return error;
};

export default ErrorApp;
