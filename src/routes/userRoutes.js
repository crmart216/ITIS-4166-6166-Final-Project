import express from 'express';
import {protectRoute} from '../middleware/authMiddleware.js';

import {
    getAllUsersHandler,
    userLoginHandler,
    userSignUpHandler,
    userLogoutHandler,
    getCurrentUserHandler,
    getUserRecipesByIdHandler
} from '../controllers/userController.js';

const router = express.Router();

router.get('/', protectRoute, getAllUsersHandler);
router.get('/me', protectRoute, getCurrentUserHandler);
router.get('/recipes/:id', protectRoute, getUserRecipesByIdHandler);
router.post('/login', userLoginHandler);
router.post('/signup', userSignUpHandler);
router.post('/logout', userLogoutHandler);


export default router;