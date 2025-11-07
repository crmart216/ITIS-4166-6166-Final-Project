import {
    getAllUsers,
    userLogin,
    userSignUp,
    getUserById,
    getUserRecipesById,
    updateOtherUser,
} from '../services/userService.js';

import generateCookie from '../lib/generateCookie.js';

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
    const {email, password} = req.body;
    const {accessToken, user} = await userLogin(email, password);
    generateCookie(accessToken, res);

    res.status(200).json({
        id : user.id,
        email: user.email,
        role: user.role
    });
}

export async function userSignUpHandler(req, res) {
    const {email, password} = req.body;

    const {accessToken, newUser} = await userSignUp(email, password);
    generateCookie(accessToken, res);

    res.status(200).json({
        message: 'New User Created',
        id : newUser.id,
        email: newUser.email,
        role: newUser.role
    });
}

export async function userLogoutHandler(_, res) {
    res.cookie("jwt", "", {maxAge: 0});
    res.status(200).json({message: "Logged out successfully"});
}

export async function updateOtherUserHandler(req, res){
    let id = parseInt(req.params.id);
    const updates = {};
    updates.role = req.body.role;
    console.log(req.params);
    const updatedUser = await updateOtherUser(id, updates);
    res.status(200).json(updatedUser);
}