import express from "express";
import { protectRoute } from "../middleware/authMiddleware.js";
import { authorizeRoles } from "../middleware/authorizeRoles.js";
import { 
    createRecipeCategoryHandler,
    deleteRecipeCategoryHandler,
    updateRecipeCategoryHandler,
 } from "../controllers/recipeCategoryController.js"

const router = express.Router();

router.post('/', protectRoute, createRecipeCategoryHandler);

router.put('/:id', protectRoute, updateRecipeCategoryHandler);

router.delete('/:id', protectRoute, deleteRecipeCategoryHandler);

export default router;
