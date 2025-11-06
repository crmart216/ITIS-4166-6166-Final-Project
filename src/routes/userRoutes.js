import express from "express";
import { protectRoute } from "../middleware/authMiddleware.js";
import { authorizeRoles } from "../middleware/authorizeRoles.js";
import { validateUpdateUserRole } from "../middleware/validateUsers.js";
import {
  getAllUsersHandler,
  userLoginHandler,
  userSignUpHandler,
  userLogoutHandler,
  updateOtherUserHandler,
  updateMeHandler,
  deleteMeHandler,
} from "../controllers/userController.js";

const router = express.Router();

router.get("/", protectRoute, authorizeRoles("ADMIN"), getAllUsersHandler);
router.post("/login", userLoginHandler);
router.post("/signup", userSignUpHandler);
router.post("/logout", userLogoutHandler);
router.patch(
  "/:id/role",
  protectRoute,
  authorizeRoles("ADMIN"),
  validateUpdateUserRole,
  updateOtherUserHandler
);
router.delete("/me", protectRoute, deleteMeHandler); //add authetnicate
router.put("/me", protectRoute, updateMeHandler); //add authetnicate

export default router;
