import { User } from '@prisma/client';
import prisma from '../../../shared/prisma';

const getAllUsers = async () => {
  const data = await prisma.user.findMany();
  return data;
};

const getUser = async (id: string) => {
  const data = await prisma.user.findUnique({ where: { id } });
  return data;
};

const updateUser = async (id: string, payload: Partial<User>) => {
  const data = await prisma.user.update({ where: { id }, data: payload });
  return data;
};

const deleteUser = async (id: string) => {
  const data = await prisma.user.delete({ where: { id } });
  return data;
};

export const UserServices = {
  getAllUsers,
  getUser,
  updateUser,
  deleteUser,
};
