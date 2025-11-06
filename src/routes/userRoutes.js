import express from 'express';
import {protectRoute} from '../middleware/authMiddleware.js';

import {
    getAllUsersHandler,
    userLoginHandler,
    userSignUpHandler,
    userLogoutHandler,
} from '../controllers/userController.js';

const router = express.Router();

router.get('/', protectRoute, getAllUsersHandler);
router.post('/login', userLoginHandler);
router.post('/signup', userSignUpHandler);
router.post('/logout', userLogoutHandler);


export default router;