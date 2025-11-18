import express from "express";
import { protectRoute } from "../middleware/authMiddleware.js";
import { authorizeRoles } from "../middleware/authorizeRoles.js";

import {
    getAllRecipesHandler,
    getRecipeByIdHandler,
    getRecipeReviewHandler,
    createRecipeHandler,
    deleteRecipeHandler,
    updateRecipeHandler,
} from '../controllers/recipeController.js';

const router = express.Router();


router.get('/', getAllRecipesHandler); // get all recipes
router.get('/:id', getRecipeByIdHandler) // get recipe by id
router.get('/:id/reviews', getRecipeReviewHandler) // get review about a recipe
router.post('/', protectRoute, createRecipeHandler) // create recipe
router.delete('/:id', protectRoute, deleteRecipeHandler) // delete recipe
router.put('/:id', protectRoute, updateRecipeHandler) // update recipe

export default router;