import prisma from "../config/db.js";

export async function getAll() {
    const recipes = await prisma.recipe.findMany({orderBy: {id: "asc"}});
    return recipes;
}

export async function getById(id) {
    const recipe = await prisma.recipe.findUnique({where: {id: id}});
    return recipe;
}

export async function create(data) {
    const newRecipe = await prisma.recipe.create({data: data});
    return newRecipe;
}

export async function remove(id) {
    const removed = await prisma.recipe.delete({where: {id: id}});
    return removed;
}

export async function update() {

}