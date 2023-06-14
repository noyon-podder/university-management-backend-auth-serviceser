import { IGenericErrorMessage } from './error';

export type IGenericErrorMessageResponse = {
  statusCode: number;
  message: string;
  errorMessages: IGenericErrorMessage[];
};
