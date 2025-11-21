import { body, param, oneOf } from "express-validator";
import { handleValidationErrors } from "./handleValidationErrors.js";

export const validateNewUser = [
  body("email")
    .exists({ checkFalsy: true })
    .withMessage("Email is required")
    .bail()
    .isEmail()
    .withMessage("Email is not valid")
    .normalizeEmail(),

  body("password")
    .exists({ checkFalsy: true })
    .withMessage("Password is required")
    .bail()
    .isLength({ min: 8, max: 64 })
    .withMessage("Password must be between 8 and 64 characters"),

  handleValidationErrors,
];

export const validateUpdateUserRole = [
  body("role")
    .exists({ values: "falsy" })
    .withMessage("Role is required")
    .bail()
    .isIn(["USER", "ADMIN"])
    .withMessage("Invalid role")
    .bail(),
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
