import express from "express";
import { protectRoute } from "../middleware/authMiddleware.js";
import { authorizeRoles } from "../middleware/authorizeRoles.js";
import {
  validateUpdateUserRole,
  validateUpdateSelf,
} from "../middleware/validateUsers.js";
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

router.get("/:id/recipes", protectRoute, getUserRecipesByIdHandler);

router.delete("/me", protectRoute, deleteMeHandler);

router.put("/me", protectRoute, validateUpdateSelf, updateMeHandler);

router.patch("/:id/role", protectRoute, authorizeRoles("ADMIN"), validateUpdateUserRole, updateOtherUserHandler);

router.delete("/:id", protectRoute, authorizeRoles("ADMIN"), deleteOtherUserHandler);

router.post("/login", userLoginHandler);

router.post("/signup", userSignUpHandler);

router.post("/logout", userLogoutHandler);



export default router;
