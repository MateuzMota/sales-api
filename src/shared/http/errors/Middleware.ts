import { Request, Response } from 'express';
import AppError from './AppError';

export default function middlewareError(
  error: Error,
  request: Request,
  response: Response,
): Response<void> {
  if (error instanceof AppError) {
    return response.status(error.statusCode).json({
      status: 'error',
      message: error.message,
    });
  }

  return response.status(500).json({
    status: 'error',
    message: 'Internal server error.',
  });
}
