import prisma from "../prisma";
export const listCategories = () => prisma.category.findMany({ include: { products: true }, orderBy: { id: "asc" } });
export const getCategory = (id: number) => prisma.category.findUnique({ where: { id }, include: { products: true } });
export const createCategory = (name: string) => prisma.category.create({ data: { name } });
export const updateCategory = (id: number, name: string) => prisma.category.update({ where: { id }, data: { name } });
export const deleteCategory = (id: number) => prisma.category.delete({ where: { id } });
