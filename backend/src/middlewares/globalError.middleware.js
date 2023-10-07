/* eslint-disable no-unused-vars */
import dotenv from 'dotenv';

dotenv.config();

export const globalError = (error, req, res, _next) => {
  error.statusCode = error.statusCode || 500;
  error.status = error.status || 'error';

  if (process.env.NODE_ENV === 'development') {
    return res.status(error.statusCode).json({
      status: error.status,
      message: error.message,
      error: error,
      stack: error.stack,
    })
  }
}