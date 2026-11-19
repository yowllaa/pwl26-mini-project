import prisma from "../prisma";
export const listProducts = () => prisma.product.findMany({ include: { category: true }, orderBy: { id: "asc" } });
export const getProduct = (id:number) => prisma.product.findUnique({where:{id},include:{category:true}});
export const createProduct = (data:{name:string;sku:string;description?:string;price:number;stock:number;categoryId:number}) => prisma.product.create({data,include:{category:true}});
export const updateProduct = (id:number,data:Partial<{name:string;sku:string;description:string;price:number;stock:number;categoryId:number}>) => prisma.product.update({where:{id},data,include:{category:true}});
export const deleteProduct = (id:number)=>{return prisma.product.delete({where:{id},})};