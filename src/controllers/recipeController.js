import {
    getAllRecipes,
    getRecipeById,
    getRecipeReview,
    createRecipe,
} from "../services/recipeService.js";

export async function getAllRecipesHandler(req, res) {
    const result = await getAllRecipes();
    res.status(200).json(result);
}

export async function getRecipeByIdHandler(req, res) {
    const recipeId = req.params.id;
    const recipe = await getRecipeById(recipeId);
    res.status(200).json(recipe);
}

export async function getRecipeReviewHandler(req, res) {
    const recipeId = req.params.id;
    const review = await getRecipeReview(recipeId);
    res.status(200).json(review);
}
//TODO: Update for categories once that part is done
export async function createRecipeHandler(req, res) {
    const {title, description, ingredients, steps, notes} = req.body;
    const user = req.user;
    const newRecipe = await createRecipe(title, description, ingredients, steps, notes, user);
    res.status(201).json(newRecipe);
}

export async function deleteRecipeHandler(req, res) {

}

export async function updateRecipeHandler(req, res) {

}