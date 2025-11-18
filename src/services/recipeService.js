import {
    getAll,
    getById,
    create,
    remove,
    update, 
} from "../repositories/recipeRepo.js";

export async function getAllRecipes() {
    return await getAll();
}

export async function getRecipeById(id) {
    if (!id) {
        return {error: "Id is required"};
    }
    const idRet = parseInt(id);
    if (!Number.isInteger(idRet)) {
        return {error: "Id must be an integer"};
    }
    return await getById(idRet);
}

export async function getRecipeReview(id) {
    if (!id) {
        return {error: "Id is required"};
    }
    const idRet = parseInt(id);
    if (!Number.isInteger(idRet)) {
        return {error: "Id must be an integer"};
    }
    const recipe = await getById(idRet);
    const review = recipe.reviews;
    
    return review;
}

export async function createRecipe(title, description, ingredients, steps, notes, user) {
    /*
    id          Int             @id @default(autoincrement())
    title       String          @unique
    category_id Int
    author_id   Int
    description String?         @default("")
    ingredients String
    steps       String
    notes       String?         @default("")
    author      User            @relation(fields: [author_id], references: [id], onDelete: Cascade)
    category    Recipe_Category @relation(fields: [category_id], references: [id], onDelete: Cascade)
    reviews     Review[]
    */

    if (!(title && description && ingredients && steps && notes)){
        return {
            error: "All fields are required",
            example: {
                title : "Bread",
                description: "Bread",
                ingredients: "Flour, Water, Yeaste, Milk, Salt, Sugar",
                steps: "Lol bread",
                notes: "I don't know how to make bread"
            }
        };
    }

    const data = {
        title,
        //author_id: user.id,
        description,
        ingredients,
        steps,
        notes,
        author: {
            connect: {id: user.id}
        }
    }

    const newRecipe = await create(data);

    return newRecipe;


}

export async function deleteRecipe(id) {
    if (!id) {
        return {error: "id is required"};
    }
    const intId = parseInt(id);
    if (!Number.isInteger(intId)) {
        return {error: "id must be an integer"};
    }
    return await remove(intId);
}

export async function updateRecipe(title, description, ingredients, steps, notes, user, id) {4
    
    if (!(title || description || ingredients || steps || notes)){
        return {error: "At least one field is required"};
    }
    
    const data = {
        title,
        //author_id: user.id,
        description,
        ingredients,
        steps,
        notes,
        author: {
            connect: {id: user.id}
        }
    }
    
    if (!id) {
        return {error: "id is required"};
    }
    const intId = parseInt(id);
    if (!Number.isInteger(intId)) {
        return {error: "id must be an integer"};
    }
    const result = await update(data, intId);
    return result;
}