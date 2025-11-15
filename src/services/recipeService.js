import {
    getAll,
    getById,
    create,
} from "../repositories/recipeRepo.js";

export async function getAllRecipes() {
    return await getAll();
}

export async function getRecipeById(id) {
    if (!id) {
        throw new Error("id is required");
    }
    const idRet = parseInt(id);
    if (!Number.isInteger(idRet)) {
        throw new Error("id must be number");
    }
    return await getById(idRet);
}

export async function getRecipeReview(id) {
    if (!id) {
        throw new Error("id is required");
    }
    const idRet = parseInt(id);
    if (!Number.isInteger(idRet)) {
        throw new Error("id must be number");
    }
    const recipe = await getById(idRet);
    const review = recipe.reviews;
    if (!review) {
        return {message: "No reviews to display"};
    }
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

    console.log(user.id);

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

export async function deleteRecipe() {

}

export async function updateRecipe() {
    
}