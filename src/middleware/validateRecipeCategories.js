// middleware/validateRecipeCategories.js
import { body, oneOf } from "express-validator";
import { handleValidationErrors } from "./handleValidationErrors.js";

export const validateCreateCategory = [
  body("name")
    .exists({ values: "falsy" })
    .withMessage("Category name is required")
    .isString()
    .trim()
    .isLength({ min: 3 })
    .withMessage("Category name must be at least 3 characters long"),
  handleValidationErrors,
];

export const validateUpdateCategory = [
  oneOf([body("name").exists({ values: "falsy" })], {
    message: "At least one field (name) must be provided",
  }),
  body("name").optional().isString().trim().isLength({ min: 3 }),
  handleValidationErrors,
];
