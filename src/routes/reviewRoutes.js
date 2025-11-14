import express from "express";
import { protectRoute } from "../middleware/authMiddleware.js";
import { authorizeRoles } from "../middleware/authorizeRoles.js";
import { 
    getAllReviewsHandler,
 } from "../controllers/reviewController.js"
import { getAll } from "../repositories/reviewRepo.js";

const router = express.Router();

router.get('/', protectRoute, getAllReviewsHandler);

export default router;
