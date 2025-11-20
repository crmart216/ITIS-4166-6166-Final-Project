// src/routes/recipeCategoryRoutes.js

import express from "express";
import { protectRoute } from "../middleware/authMiddleware.js";
import { authorizeRoles } from "../middleware/authorizeRoles.js";
import { validateIdParam } from "../middleware/validateID.js";
import {
  validateCreateCategory,
  validateUpdateCategory,
} from "../middleware/validateRecipeCategories.js";
import {
  createRecipeCategoryHandler,
  deleteRecipeCategoryHandler,
  updateRecipeCategoryHandler,
  fetchAllCategories,
  fetchCategoryById,
} from "../controllers/recipeCategoryController.js";

const router = express.Router();

router.get("/", fetchAllCategories);
router.get("/:id", protectRoute, validateIdParam(), fetchCategoryById);

router.post(
  "/",
  protectRoute,
  validateCreateCategory,
  createRecipeCategoryHandler
);

router.put(
  "/:id",
  protectRoute,
  authorizeRoles("ADMIN"),
  validateIdParam(),
  validateUpdateCategory,
  updateRecipeCategoryHandler
);

router.delete(
  "/:id",
  protectRoute,
  authorizeRoles("ADMIN"),
  validateIdParam(),
  deleteRecipeCategoryHandler
);

export default router;
