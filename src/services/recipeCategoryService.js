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
import { create, remove, update } from "../repositories/recipeCategoryRepo.js";

export async function createRecipeCategory(data) {
  return await create(data);
}

export async function updateRecipeCategory(id, data) {
  const updatedRecipeCategory = await update(id, data);
  if (updatedRecipeCategory) return updatedRecipeCategory;
  else {
    const error = new Error(`Cannot find post with id ${id}`);
    error.status = 404;
    throw error;
  }
}

export async function deleteRecipeCategory(id) {
  const result = await remove(id);
  if (result) return;
  else {
    const error = new Error(`Cannot find post with id ${id}`);
    error.status = 404;
    throw error;
  }
}
