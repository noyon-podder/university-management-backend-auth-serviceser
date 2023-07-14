import express from 'express';
import { AcademicDepartmentController } from './academicDepartment.controller';
import validateRequest from '../../../middlewares/validateRequest';
import { AcademicDepartmentValidate } from './academicDepartment.validate';

const router = express.Router();

router.post(
  '/create-department',
  validateRequest(AcademicDepartmentValidate.createAcademicDepartmentZodSchema),
  AcademicDepartmentController.createDepartment
);

router.get('/:id', AcademicDepartmentController.getSingleDepartment);

router.patch(
  '/:id',
  validateRequest(AcademicDepartmentValidate.updateAcademicDepartmentZodSchema),
  AcademicDepartmentController.updateDepartment
);

router.delete('/:id', AcademicDepartmentController.deleteDepartment);

router.get('/', AcademicDepartmentController.getAllDepartment);

export const AcademicDepartmentRoutes = router;
