import express from "express";
import { protectRoute } from "../middleware/authMiddleware.js";
import { authorizeRoles } from "../middleware/authorizeRoles.js";
import {
  validateUpdateUserRole,
  validateUpdateSelf,
  validateNewUser,
} from "../middleware/validateUsers.js";
import { validateIdParam } from "../middleware/validateID.js";
import { strictLimiter } from "../middleware/rateLimiter.js";
import { authorizeOwnership } from "../middleware/authorizeOwnership.js";
import {
  getAllUsersHandler,
  userLoginHandler,
  userSignUpHandler,
  userLogoutHandler,
  updateOtherUserHandler,
  updateMeHandler,
  deleteMeHandler,
  deleteOtherUserHandler,
  getCurrentUserHandler,
  getUserRecipesByIdHandler,
} from "../controllers/userController.js";

const router = express.Router();

router.get("/", protectRoute, authorizeRoles("ADMIN"), getAllUsersHandler);

router.get("/me", protectRoute, getCurrentUserHandler);

router.get(
  "/:id/recipes",
  protectRoute,
  validateIdParam(),
  getUserRecipesByIdHandler
);

router.delete("/me", protectRoute, deleteMeHandler);

router.put("/me", protectRoute, validateUpdateSelf, updateMeHandler);

router.patch(
  "/:id/role",
  protectRoute,
  authorizeRoles("ADMIN"),
  validateIdParam,
  validateUpdateUserRole,
  updateOtherUserHandler
);

router.delete(
  "/:id",
  protectRoute,
  authorizeRoles("ADMIN"),
  validateIdParam,
  deleteOtherUserHandler
);

router.post("/login", strictLimiter, userLoginHandler);

router.post("/signup", strictLimiter, validateNewUser, userSignUpHandler);

router.post("/logout", userLogoutHandler);

export default router;
