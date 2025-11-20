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

export async function create(recipeCategory) {
  const newRecipeCategory = await prisma.recipe_Category.create({
    data: recipeCategory,
  });
  return newRecipeCategory;
}

export async function remove(id) {
  try {
    const deletedRecipeCategory = await prisma.recipe_Category.delete({
      where: { id },
    });
    return deletedRecipeCategory;
  } catch (error) {
    if (error.code === "P2025") return null;
    throw error;
  }
}

export async function update(id, updates) {
  try {
    const updatedRecipeCategory = await prisma.recipe_Category.update({
      where: { id },
      data: updates,
    });
    return updatedRecipeCategory;
  } catch (error) {
    if (error.code === "P2025") return null;
    throw error;
  }
}
