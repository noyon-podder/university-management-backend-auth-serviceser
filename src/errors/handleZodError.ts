import { ZodError, ZodIssue } from 'zod';
import { IGenericErrorMessageResponse } from '../interfaces/common';
import { IGenericErrorMessage } from '../interfaces/error';

const handleZodError = (error: ZodError): IGenericErrorMessageResponse => {
  const errors: IGenericErrorMessage[] = error.issues.map((issue: ZodIssue) => {
    return {
      path: issue.path[issue.path.length - 1],
      message: issue.message,
    };
  });
  const statusCode = 500;
  return {
    statusCode,
    message: 'Validation Error',
    errorMessages: errors,
  };
};

export default handleZodError;
