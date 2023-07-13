import { IAcademicSemester } from './academicSemester.interface';
import { Request, Response } from 'express';
import catchAsync from '../../../shared/catchAsync';
import { AcademicSemesterService } from './academicSemester.service';
import sendResponse from '../../../shared/sendResponse';
import { StatusCodes } from 'http-status-codes';
import pick from '../../../shared/pick';
import { paginationFields } from '../../../constants/pagination';
import { academicSemesterFilterableField } from './academicSemester.constant';

const createSemester = catchAsync(async (req: Request, res: Response) => {
  const { ...academicSemesterData } = req.body;

  const result = await AcademicSemesterService.createSemester(
    academicSemesterData
  );

  sendResponse(res, {
    statusCode: StatusCodes.OK,
    success: true,
    message: 'Academic Semester create successfully!!',
    data: result,
  });
});

const getAllSemesters = catchAsync(async (req: Request, res: Response) => {
  const filters = pick(req.query, academicSemesterFilterableField);
  const paginationDetails = pick(req.query, paginationFields);

  const result = await AcademicSemesterService.getAllSemesters(
    filters,
    paginationDetails
  );

  sendResponse<IAcademicSemester[]>(res, {
    statusCode: StatusCodes.OK,
    success: true,
    message: 'Semester retrieved successfully !!!',
    data: result.data,
    meta: result.meta,
  });
});

const getSingleSemester = catchAsync(async (req: Request, res: Response) => {
  const id = req.params.id;

  const result = await AcademicSemesterService.getSingleSemester(id);

  sendResponse<IAcademicSemester>(res, {
    statusCode: StatusCodes.OK,
    success: true,
    message: 'Semester retrieved successfully !!!',
    data: result,
  });
});

// update semester controller

const updateSemester = catchAsync(async (req: Request, res: Response) => {
  const id = req.params.id;
  const updateData = req.body;

  const result = await AcademicSemesterService.updateSemester(id, updateData);

  sendResponse<IAcademicSemester>(res, {
    statusCode: StatusCodes.OK,
    success: true,
    message: 'Semester update successfully !!!',
    data: result,
  });
});

const deleteSemester = catchAsync(async (req: Request, res: Response) => {
  const id = req.params.id;

  const result = await AcademicSemesterService.deleteSemester(id);

  sendResponse<IAcademicSemester>(res, {
    statusCode: StatusCodes.OK,
    success: true,
    message: 'Semester update successfully !!!',
    data: result,
  });
});

export const AcademicSemesterController = {
  createSemester,
  getAllSemesters,
  getSingleSemester,
  updateSemester,
  deleteSemester,
};
