import express from 'express';
import {protectRoute} from '../middleware/authMiddleware.js';
import { authorizeRoles } from '../middleware/authorizeRoles.js';
import { validateUpdateUserRole } from '../middleware/validateUsers.js';
import {
    getAllUsersHandler,
    userLoginHandler,
    userSignUpHandler,
    userLogoutHandler,
    updateOtherUserHandler,
    deleteOtherUserHandler,
    getCurrentUserHandler,
    getUserRecipesByIdHandler
} from '../controllers/userController.js';

const router = express.Router();

router.get('/', protectRoute, authorizeRoles('ADMIN'), getAllUsersHandler);

router.get('/me', protectRoute, getCurrentUserHandler);

router.get('/recipes/:id', protectRoute, getUserRecipesByIdHandler);

router.post('/login', userLoginHandler);

router.post('/signup', userSignUpHandler);

router.post('/logout', userLogoutHandler);

router.patch('/:id/role', protectRoute, authorizeRoles('ADMIN'), validateUpdateUserRole, updateOtherUserHandler)

router.delete('/:id', protectRoute, authorizeRoles('ADMIN'), deleteOtherUserHandler)

export default router;