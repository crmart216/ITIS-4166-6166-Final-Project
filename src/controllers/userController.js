import bcrypt from "bcrypt";
import {
  getAllUsers,
  userLogin,
  userSignUp,
  updateOtherUser,
  editMe,
  removeMe,
} from "../services/userService.js";

import generateCookie from "../lib/generateCookie.js";

export async function getAllUsersHandler(req, res) {
  const result = await getAllUsers(req.query);
  res.status(200).json(result);
}

export async function userLoginHandler(req, res) {
  const { email, password } = req.body;
  const { accessToken, user } = await userLogin(email, password);
  generateCookie(accessToken, res);

  res.status(200).json({
    id: user.id,
    email: user.email,
    role: user.role,
  });
}

export async function userSignUpHandler(req, res) {
  const { email, password } = req.body;

  const { accessToken, newUser } = await userSignUp(email, password);
  generateCookie(accessToken, res);

  res.status(200).json({
    message: "New User Created",
    id: newUser.id,
    email: newUser.email,
    role: newUser.role,
  });
}

export async function userLogoutHandler(_, res) {
  res.cookie("jwt", "", { maxAge: 0 });
  res.status(200).json({ message: "Logged out successfully" });
}

export async function updateOtherUserHandler(req, res) {
  let id = parseInt(req.params.id);
  const updates = {};
  updates.role = req.body.role;
  console.log(req.params);
  const updatedUser = await updateOtherUser(id, updates);
  res.status(200).json(updatedUser);
}

export async function updateMeHandler(req, res, next) {
  try {
    const { email, password } = req.body;

    if (email === undefined && password === undefined) {
      const err = new Error(
        "At least one field (email or password) must be provided"
      );
      err.status = 400;
      throw err;
    }

    const data = {};
    if (email !== undefined) data.email = email;
    if (password !== undefined) data.password = await bcrypt.hash(password, 10);

    const updated = await editMe(req.user.id, data);
    res.status(200).json(updated);
  } catch (err) {
    // Prisma unique constraint for email -> P2002
    if (err.code === "P2002") {
      const e = new Error("Email has already been used");
      e.status = 409;
      return next(e);
    }
    next(err);
  }
}

export async function deleteMeHandler(req, res, next) {
  try {
    await removeMe(req.user.id);
    res.status(204).send();
  } catch (err) {
    // Prisma "record to delete does not exist" -> P2025 (optional handling)
    if (err.code === "P2025") {
      const e = new Error("User not found");
      e.status = 404;
      return next(e);
    }
    next(err);
  }
}
