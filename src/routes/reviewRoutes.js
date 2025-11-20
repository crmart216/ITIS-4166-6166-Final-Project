import express from "express";
import { protectRoute } from "../middleware/authMiddleware.js";
import { authorizeRoles } from "../middleware/authorizeRoles.js";
import { authorizeOwnership } from "../middleware/authorizeOwnership.js";
import { validateIdParam } from "../middleware/validateID.js";
import {
  validateCreateReview,
  validateUpdateReview,
} from "../middleware/validateReviews.js";
import {
  getAllReviewsHandler,
  getReviewByIdHandler,
  createReviewHandler,
  updateReviewHandler,
  deletePostHandler,
} from "../controllers/reviewController.js";
import { getAll } from "../repositories/reviewRepo.js";

const router = express.Router();

router.get("/", protectRoute, getAllReviewsHandler);
router.get("/:id", protectRoute, validateIdParam(), getReviewByIdHandler);
router.post("/", protectRoute, validateCreateReview, createReviewHandler);
router.put(
  "/:id",
  protectRoute,
  authorizeOwnership,
  validateIdParam(),
  validateUpdateReview,
  updateReviewHandler
);
router.delete(
  "/:id",
  protectRoute,
  authorizeOwnership,
  validateIdParam(),
  deletePostHandler
);
export default router;
