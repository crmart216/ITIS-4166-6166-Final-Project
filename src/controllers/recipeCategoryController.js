// src/controllers/recipeCategoryController.js
import * as service from "../services/recipeCategoryService.js";

export const fetchAllCategories = async (req, res) => {
  try {
    const categories = await service.getCategories();
    return res.json(categories);
  } catch (err) {
    return res.status(500).json({ error: err.message });
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
