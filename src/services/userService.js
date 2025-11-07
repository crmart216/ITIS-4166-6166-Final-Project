import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import {Prisma} from '../generated/prisma/index.js';

const JWT_SECRET = process.env.JWT_SECRET;
const JWT_EXPIRES_IN = process.env.JWT_EXPIRES_IN;

import {
    getUsers,
    findUsersByEmail,
    createUser,
    updateUser,
    findUserById,
    findUserRecipesById,
} from '../repositories/userRepo.js';


export async function getAllUsers(filter) {
    return await getUsers(filter);
}

export async function getUserById(id) {
  return await findUserById(id);
}

export async function getUserRecipesById(id) {
    return await findUserRecipesById(id);
}

export async function userLogin(email, password) {
    const user = await findUsersByEmail(email);

    if (!user) {
        const error = new Error ('Invalid credentials');
        error.status = 401;
        throw error;
    }
    const isMatch = await bcrypt.compare (password, user.password);

    if(!isMatch) {
        const error = new Error ('Invalid credentials');
        error.status = 401;
        throw error;
    }

    const accessToken = await jwt.sign({id: user.id, email: user.email, role: user.role},
        JWT_SECRET, {expiresIn: JWT_EXPIRES_IN});
    
    return {accessToken, user};
}

export async function userSignUp(email, password) {
    const hashedPassword = await bcrypt.hash(password, 10);
    

    try {
        const newUser = await createUser({email, password: hashedPassword});
        const accessToken = await jwt.sign({id: newUser.id, email: newUser.email, role: newUser.role},
            JWT_SECRET, {expiresIn: JWT_EXPIRES_IN});
    
        return {accessToken, newUser};
        
    } catch (error) {
        if(error instanceof Prisma.PrismaClientKnownRequestError) {
            if (error.code = 'P2002') {
                const error = new Error ('Email has already been used');
                error.status = 409;
                throw error;
            }
            throw error;
        }
        throw error;
    }
}

export async function updateOtherUser(id, updates){
    const updatedUser = await updateUser(id, updates);
    if(updatedUser) return updatedUser;
    else {
        const error = new Error (`Cannot find user with id ${id}`);
        error.status = 404;
        throw error;
    }
}