import express from "express";
import { protectRoute } from "../middleware/authMiddleware.js";
import { authorizeRoles } from "../middleware/authorizeRoles.js";
import { 
    getAllReviewsHandler,
    getReviewByIdHandler,
    createReviewHandler,
    updateReviewHandler,
    deletePostHandler
 } from "../controllers/reviewController.js"
import { getAll } from "../repositories/reviewRepo.js";

const router = express.Router();

router.get('/', protectRoute, getAllReviewsHandler);
router.get('/:id', protectRoute, getReviewByIdHandler);
router.post("/", protectRoute, createReviewHandler);
router.put('/:id', protectRoute, updateReviewHandler);
router.delete('/:id', protectRoute, deletePostHandler);
export default router;
