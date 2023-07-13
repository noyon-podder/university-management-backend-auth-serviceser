import { StatusCodes } from 'http-status-codes';
import sendResponse from '../../../shared/sendResponse';
import catchAsync from '../../../shared/catchAsync';
import { Request, Response } from 'express';
import { AcademicFacultyService } from './academicFaculty.service';
import pick from '../../../shared/pick';
import { paginationFields } from '../../../constants/pagination';
import { academicFacultyFilterableFields } from './academicFaculty.constant';
import { IAcademicFaculty } from './academicFaculty.interface';

const createFaculty = catchAsync(async (req: Request, res: Response) => {
  const { ...academicFacultyData } = req.body;

  const result = await AcademicFacultyService.createFaculty(
    academicFacultyData
  );

  sendResponse(res, {
    statusCode: StatusCodes.OK,
    success: true,
    message: 'Academic Faculty create successfully!!',
    data: result,
  });
});

const getSingleFaculty = catchAsync(async (req: Request, res: Response) => {
  const id = req.params.id;

  const result = await AcademicFacultyService.getSingleFaculty(id);

  sendResponse<IAcademicFaculty>(res, {
    statusCode: StatusCodes.OK,
    success: true,
    message: 'Faculty retrieved successfully !!!',
    data: result,
  });
});

const getAllFaculty = catchAsync(async (req: Request, res: Response) => {
  const filters = pick(req.query, academicFacultyFilterableFields);
  const paginationDetails = pick(req.query, paginationFields);

  const result = await AcademicFacultyService.getAllFaculty(
    filters,
    paginationDetails
  );

  sendResponse<IAcademicFaculty[]>(res, {
    statusCode: StatusCodes.OK,
    success: true,
    message: 'Faculty retrieved successfully !!!',
    data: result.data,
    meta: result.meta,
  });
});

const updateFaculty = catchAsync(async (req: Request, res: Response) => {
  const id = req.params.id;
  const updateData = req.body;

  const result = await AcademicFacultyService.updateFaculty(id, updateData);

  sendResponse<IAcademicFaculty>(res, {
    statusCode: StatusCodes.OK,
    success: true,
    message: 'Faculty update successfully !!!',
    data: result,
  });
});

const deleteFaculty = catchAsync(async (req: Request, res: Response) => {
  const id = req.params.id;

  const result = await AcademicFacultyService.deleteFaculty(id);

  sendResponse<IAcademicFaculty>(res, {
    statusCode: StatusCodes.OK,
    success: true,
    message: 'Faculty delete successfully !!!',
    data: result,
  });
});

export const AcademicFacultyController = {
  createFaculty,
  getSingleFaculty,
  getAllFaculty,
  updateFaculty,
  deleteFaculty,
};
