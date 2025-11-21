// middleware/validateRecipes.js
import { body, oneOf } from "express-validator";
import { handleValidationErrors } from "./handleValidationErrors.js";

export const validateCreateRecipe = [
  body("title")
    .exists({ values: "falsy" })
    .withMessage("Title is required")
    .bail()
    .isString()
    .trim()
    .isLength({ min: 3 })
    .withMessage("Title must be at least 3 characters long")
    .bail(),

  body("category_id")
    .optional()
    .isInt({ min: 1 })
    .withMessage("Category ID must be a positive integer"),

  body("description").optional().isString().trim(),
  body("steps")
    .exists({ values: "falsy" })
    .withMessage("Steps are required")
    .bail()
    .isString(),
  body("ingredients")
    .exists({ values: "falsy" })
    .withMessage("Ingredients are required")
    .bail()
    .isString(),
  body("notes").optional().isString().trim(),

  handleValidationErrors,
];

export const validateUpdateRecipe = [
  oneOf(
    [
      body("title").exists({ values: "falsy" }),
      body("description").exists({ values: "falsy" }),
      body("steps").exists({ values: "falsy" }),
      body("ingredients").exists({ values: "falsy" }),
      body("notes").exists({ values: "falsy" }),
    ],
    {
      message:
        "At least one field (title, description, steps, ingredients, notes) must be provided",
    }
  ),

  body("title").optional().isString().trim().isLength({ min: 3 }).withMessage("Title must be at least 3 characters long"),
  body("description").optional().isString().trim(),
  body("steps").optional().isString(),
  body("ingredients").optional().isString(),
  body("notes").optional().isString().trim(),

  handleValidationErrors,
];
