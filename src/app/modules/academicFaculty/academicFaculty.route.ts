import express from 'express';
import { AcademicFacultyController } from './academicFaculty.controller';
import validateRequest from '../../../middlewares/validateRequest';
import { AcademicFacultyValidate } from './academicFaculty.validate';

const router = express.Router();

router.post(
  '/create-faculty',
  validateRequest(AcademicFacultyValidate.createAcademicFacultyZodSchema),
  AcademicFacultyController.createFaculty
);
router.get('/getAllFaculty', AcademicFacultyController.getAllFaculty);

router.get('/:id', AcademicFacultyController.getSingleFaculty);
router.patch(
  '/:id',
  validateRequest(AcademicFacultyValidate.updateAcademicFacultyZodSchema),
  AcademicFacultyController.updateFaculty
);

router.delete('/:id', AcademicFacultyController.deleteFaculty);

export const AcademicFacultyRoutes = router;
