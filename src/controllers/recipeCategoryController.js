// src/controllers/recipeCategoryController.js
import * as service from "../services/recipeCategoryService.js";
import {
  createRecipeCategory,
  updateRecipeCategory,
  deleteRecipeCategory,
} from "../services/recipeCategoryService.js";

export const fetchAllCategories = async (req, res) => {
  try {
    const categories = await service.getCategories();
    return res.json(categories);
  } catch (err) {
      if (err.code === "P2002") {
          res.status(404).json({ error: "A recipe category with this name already exists"})
          return;
      } else {
          throw new Error(err);
      }
  }
};

export const fetchCategoryById = async (req, res) => {
  try {
    const { id } = req.params;
    const category = await service.getCategoryById(id);
    return res.json(category);
  } catch (err) {
    if (err.message === "Category not found") {
      return res.status(404).json({ error: "Category not found" });
    }
    return res.status(500).json({ error: err.message });
  }
};

export async function createRecipeCategoryHandler(req, res) {
  const data = {
    name: req.body.name,
  };
  try{
    let newRecipeCategory = await createRecipeCategory(data);
    res.status(201).json(newRecipeCategory);
  } catch (err) {
      if (err.code === "P2002") {
          res.status(404).json({ error: "A recipe with this name already exists"})
          return;
      } else {
          throw new Error(err);
      }
  }

}

export async function updateRecipeCategoryHandler(req, res) {
  let id = parseInt(req.params.id);
  const updates = {};
  if (req.body.name) updates.name = req.body.name;
  const updatedRecipeCategory = await updateRecipeCategory(id, updates);
  res.status(200).json(updateRecipeCategory);
}

export async function deleteRecipeCategoryHandler(req, res) {
  let id = parseInt(req.params.id);
  await deleteRecipeCategory(id);
  res.status(204).send();
}
