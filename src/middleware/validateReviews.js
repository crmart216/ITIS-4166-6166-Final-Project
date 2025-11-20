// middleware/validateReviews.js
import { body, oneOf } from "express-validator";
import { handleValidationErrors } from "./handleValidationErrors.js";

export const validateCreateReview = [
  body("content")
    .exists({ values: "falsy" })
    .withMessage("Review content is required")
    .isString()
    .trim()
    .isLength({ min: 3 })
    .withMessage("Review must be at least 3 characters long"),

  body("recipe_id")
    .exists({ values: "falsy" })
    .withMessage("Recipe ID is required")
    .isInt({ min: 1 })
    .withMessage("Recipe ID must be a positive integer"),

  handleValidationErrors,
];

export const validateUpdateReview = [
  oneOf([body("content").exists({ values: "falsy" })], {
    message: "At least one field (content) must be provided",
  }),
  body("content").optional().isString().trim().isLength({ min: 3 }),
  handleValidationErrors,
];
