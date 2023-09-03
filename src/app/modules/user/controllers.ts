import { RequestHandler } from 'express';
import catchAsync from '../../../shared/catchAsync';
import { UserServices } from './services';
import sendResponse from '../../../shared/sendResponse';
import httpStatus from 'http-status';

const getAllUsers: RequestHandler = catchAsync(async (req, res) => {
  const result = await UserServices.getAllUsers();

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Users data fetched successfully!',
    data: result,
  });
});

export const UserControllers = {
  getAllUsers,
};
