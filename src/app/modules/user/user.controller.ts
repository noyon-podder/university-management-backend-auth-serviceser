import { Request, Response } from 'express';

import catchAsync from '../../../shared/catchAsync';
import { UserService } from './user.services';
import sendResponse from '../../../shared/sendResponse';
import { StatusCodes } from 'http-status-codes';

const createUser = catchAsync(async (req: Request, res: Response) => {
  const { user } = req.body;
  const result = await UserService.createUser(user);

  //res.send format come from send response
  sendResponse(res, {
    statusCode: StatusCodes.OK,
    success: true,
    message: 'User created successfully',
    data: result,
  });
});

export const UserController = {
  createUser,
};
