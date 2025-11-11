import { body, param, oneOf } from "express-validator";
import { handleValidationErrors } from "./handleValidationErrors.js";

export const validateUpdateUserRole = [
  body("role")
    .exists({ values: "falsy" })
    .withMessage("Role is required")
    .isIn(["USER", "ADMIN"])
    .withMessage("Invalid role"),
  handleValidationErrors,
];

export const validateUpdateSelf = [
  body("email")
    .optional()
    .isEmail()
    .withMessage("Email must be valid")
    .normalizeEmail(),

  body("password")
    .optional()
    .isLength({ min: 8, max: 64 })
    .withMessage("Password must be between 8 and 64 characters"),

  handleValidationErrors,
];
