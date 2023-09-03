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

const getUser: RequestHandler = catchAsync(async (req, res) => {
  const id = req.params.id
  const result = await UserServices.getUser(id);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'User data fetched successfully!',
    data: result,
  });
});

const updateUser: RequestHandler = catchAsync(async (req, res) => {
  const id = req.params.id
  const userData = req.body
  const result = await UserServices.updateUser(id, userData);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Users data updated successfully!',
    data: result,
  });
});

const deleteUser: RequestHandler = catchAsync(async (req, res) => {
  const id = req.params.id
  const result = await UserServices.deleteUser(id);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Users data deleted successfully!',
    data: result,
  });
});

export const UserControllers = {
  getAllUsers,
  getUser,
  updateUser,
  deleteUser,
};
