import express from 'express';
import {protectRoute} from '../middleware/authMiddleware.js';

import {
    getAllUsersHandler,
    userLoginHandler,
    userSignUpHandler,
    userLogoutHandler,
    updateOtherUserHandler,
} from '../controllers/userController.js';

const router = express.Router();

router.get('/', protectRoute, getAllUsersHandler);
router.post('/login', userLoginHandler);
router.post('/signup', userSignUpHandler);
router.post('/logout', userLogoutHandler);
router.patch('/:id/role', protectRoute, updateOtherUserHandler)


export default router;