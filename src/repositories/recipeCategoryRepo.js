import prisma from "../config/db.js";


export async function create(recipeCategory){
    const newRecipeCategory = await prisma.recipe_Category.create({
        data: recipeCategory,
    });
    return newRecipeCategory;
}

export async function remove(id){
    try {
        const deletedRecipeCategory = await prisma.recipe_Category.delete({
            where: { id },
        });
        return deletedRecipeCategory;
    } catch (error){
        if(error.code === 'P2025') return null;
        throw error;
    } 
}

export async function update(id, updates){
    try{
        const updatedRecipeCategory = await prisma.recipe_Category.update({
            where: { id },
            data: updates,
        });
        return updatedRecipeCategory;
    } catch (error) {
        if(error.code === 'P2025') return null;
        throw error;
    }

}