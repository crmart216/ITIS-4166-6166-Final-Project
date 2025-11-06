import prisma from '../config/db.js';

export async function getUsers(filter) {
    //TODO: implement filter logic from query

    const users = await prisma.user.findMany({
        select: {
            id: true,
            email: true,
            role: true,
        }, 
        orderBy: {id: 'asc'}
    });
    return users;
}

export async function findUsersByEmail(email) {
    return await prisma.user.findUnique({where: {email}});
}

export async function createUser(data) {
    const newUser = await prisma.user.create({data: data});
    return newUser;
}