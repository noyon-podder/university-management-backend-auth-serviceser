import express from 'express';
import { UserController } from './user.controller';
import validateRequest from '../../../middlewares/validateRequest';
import { UserValidate } from './user.validate';

const router = express.Router();

router.post(
  '/create-user',
  validateRequest(UserValidate.createUserZodSchema),
  UserController.createUser
);

export const UserRoutes = router;
