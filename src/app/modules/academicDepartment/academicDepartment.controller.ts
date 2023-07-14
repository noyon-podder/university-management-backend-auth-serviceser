import { StatusCodes } from 'http-status-codes';
import sendResponse from '../../../shared/sendResponse';
import catchAsync from '../../../shared/catchAsync';
import { Request, Response } from 'express';
import { AcademicDepartmentService } from './academicDepartment.service';
import { IAcademicDepartment } from './academicDepartment.interface';
import { paginationFields } from '../../../constants/pagination';
import pick from '../../../shared/pick';
import { academicDepartmentFilterableFields } from './academicDepartment.constant';

const createDepartment = catchAsync(async (req: Request, res: Response) => {
  const { ...academicDepartmentData } = req.body;

  const result = await AcademicDepartmentService.createDepartment(
    academicDepartmentData
  );

  sendResponse(res, {
    statusCode: StatusCodes.OK,
    success: true,
    message: 'Academic Department create successfully!!',
    data: result,
  });
});

const getAllDepartment = catchAsync(async (req: Request, res: Response) => {
  const filters = pick(req.query, academicDepartmentFilterableFields);
  const paginationDetails = pick(req.query, paginationFields);

  const result = await AcademicDepartmentService.getAllDepartment(
    filters,
    paginationDetails
  );

  sendResponse<IAcademicDepartment[]>(res, {
    statusCode: StatusCodes.OK,
    success: true,
    message: 'Department retrieved successfully !!!',
    data: result.data,
    meta: result.meta,
  });
});

const getSingleDepartment = catchAsync(async (req: Request, res: Response) => {
  const id = req.params.id;

  const result = await AcademicDepartmentService.getSingleDepartment(id);

  sendResponse<IAcademicDepartment>(res, {
    statusCode: StatusCodes.OK,
    success: true,
    message: 'Department retrieved successfully !!!',
    data: result,
  });
});

const updateDepartment = catchAsync(async (req: Request, res: Response) => {
  const id = req.params.id;
  const updateData = req.body;

  const result = await AcademicDepartmentService.updateDepartment(
    id,
    updateData
  );

  sendResponse<IAcademicDepartment>(res, {
    statusCode: StatusCodes.OK,
    success: true,
    message: 'Department update successfully !!!',
    data: result,
  });
});

const deleteDepartment = catchAsync(async (req: Request, res: Response) => {
  const id = req.params.id;

  const result = await AcademicDepartmentService.deleteDepartment(id);

  sendResponse<IAcademicDepartment>(res, {
    statusCode: StatusCodes.OK,
    success: true,
    message: 'Department delete successfully !!!',
    data: result,
  });
});
export const AcademicDepartmentController = {
  createDepartment,
  getAllDepartment,
  getSingleDepartment,
  updateDepartment,
  deleteDepartment,
};
