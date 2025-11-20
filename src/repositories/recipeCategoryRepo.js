import prisma from "../config/db.js";

export const getAllRecipeCategories = async () => {
  return await prisma.recipe_Category.findMany({
    select: {
      id: true,
      name: true,
    },
  });
};

export const getRecipeCategoryById = async (id) => {
  return await prisma.recipe_Category.findUnique({
    where: { id: Number(id) },
    select: {
      id: true,
      name: true,
    },
  });
};
