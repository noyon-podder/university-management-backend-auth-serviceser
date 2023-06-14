import mongoose from 'mongoose';
import { IGenericErrorMessageResponse } from '../interfaces/common';
import { IGenericErrorMessage } from '../interfaces/error';

const handleValidationError = (
  err: mongoose.Error.ValidationError
): IGenericErrorMessageResponse => {
  const errors: IGenericErrorMessage[] = Object.values(err.errors).map(
    (el: mongoose.Error.ValidatorError | mongoose.Error.CastError) => {
      return {
        path: el?.path,
        message: el?.message,
      };
    }
  );

  const statusCode = 500;
  return {
    statusCode,
    message: 'validation error',
    errorMessages: errors,
  };
};

export default handleValidationError;
