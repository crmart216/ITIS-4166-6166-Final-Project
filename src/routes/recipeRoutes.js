import express from "express";
import { protectRoute } from "../middleware/authMiddleware.js";
import { authorizeRoles } from "../middleware/authorizeRoles.js";
import { validateIdParam } from "../middleware/validateID.js";
import { authorizeOwnership } from "../middleware/authorizeOwnership.js";

import {
  getAllRecipesHandler,
  getRecipeByIdHandler,
  getRecipeReviewHandler,
  createRecipeHandler,
  deleteRecipeHandler,
  updateRecipeHandler,
} from "../controllers/recipeController.js";

const router = express.Router();

router.get("/", protectRoute, getAllRecipesHandler); // get all recipes
router.get("/:id", protectRoute, validateIdParam(), getRecipeByIdHandler); // get recipe by id
router.get(
  "/:id/reviews",
  protectRoute,
  validateIdParam(),
  getRecipeReviewHandler
); // get review about a recipe
router.post("/", protectRoute, createRecipeHandler); // create recipe
router.delete(
  "/:id",
  protectRoute,
  authorizeOwnership,
  validateIdParam(),
  deleteRecipeHandler
); // delete recipe
router.put("/:id", protectRoute, authorizeOwnership, updateRecipeHandler); // update recipe

export default router;
