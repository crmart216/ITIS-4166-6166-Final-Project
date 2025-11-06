import { body, param, oneOf } from 'express-validator';
import { handleValidationErrors } from './handleValidationErrors.js';


export const validateUpdateUserRole = [
    body('role')
        .exists({ values: 'falsy' })
        .withMessage('Role is required')
        .isIn(['USER', 'ADMIN'])
        .withMessage('Invalid role'),
    handleValidationErrors
];