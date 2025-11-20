// src/services/recipeCategoryService.js
import * as repo from "../repositories/recipeCategoryRepo.js";

export const getCategories = async () => {
  return await repo.getAllRecipeCategories();
};

export const getCategoryById = async (id) => {
  const category = await repo.getRecipeCategoryById(id);
  if (!category) {
    throw new Error("Category not found");
  }
  return category;
};
