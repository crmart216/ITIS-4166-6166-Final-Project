// src/routes/recipeCategoryRoutes.js
import express from "express";
import {
  fetchAllCategories,
  fetchCategoryById,
} from "../controllers/recipeCategoryController.js";

const router = express.Router();

router.get("/", fetchAllCategories);
router.get("/:id", fetchCategoryById);

export default router;
