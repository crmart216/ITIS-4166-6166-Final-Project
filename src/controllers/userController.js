import bcrypt from "bcrypt";
import {
  getAllUsers,
  userLogin,
  userSignUp,
  getUserById,
  getUserRecipesById,
  updateOtherUser,
  deleteUser,
  editMe,
  removeMe,
} from "../services/userService.js";

import generateCookie from "../lib/generateCookie.js";

export async function getAllUsersHandler(req, res) {
  const result = await getAllUsers(req.query);
  res.status(200).json(result);
}

export async function getCurrentUserHandler(req, res, next) {
  try {
    const userId = req.user.id;
    const user = await getUserById(userId);
    res.status(200).json(user);
  } catch (err) {
    next(err);
  }
}

export async function getUserRecipesByIdHandler(req, res, next) {
  try {
    const userId = req.params.id;
    const recipes = await getUserRecipesById(userId);
    res.status(200).json(recipes);
  } catch (err) {
    next(err);
  }
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
  const updatedUser = await updateOtherUser(id, updates);
  res.status(200).json(updatedUser);
}

export async function deleteOtherUserHandler(req, res) {
  let id = parseInt(req.params.id);
  await deleteUser(id);
  res.status(204).send();
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
    if (err.code === "P2025") {
      const e = new Error("User not found");
      e.status = 404;
      return next(e);
    }
    next(err);
  }
}
