import {
    getAllRecipes,
    getRecipeById,
    getRecipeReview,
    createRecipe,
    deleteRecipe,
    updateRecipe,
} from "../services/recipeService.js";

export async function getAllRecipesHandler(req, res) {
    const result = await getAllRecipes();
    res.status(200).json(result);
}

export async function getRecipeByIdHandler(req, res) {
    const recipeId = req.params.id;
    const recipe = await getRecipeById(recipeId);
    if (recipe && recipe.error) {
        res.status(400).json(recipe);
        return;
    }
    if (!recipe) {
        res.status(404).json({error: "Recipe not found"});
        return;
    }
    res.status(200).json(recipe);
}

export async function getRecipeReviewHandler(req, res) {
    const recipeId = req.params.id;
    const review = await getRecipeReview(recipeId);
    if (review && review.error) {
        res.status(400).json(review);
        return;
    }
    if (!review) {
        res.status(404).json({error: "No reviews to display"});
        return;
    } 
    res.status(200).json(review);
}

export async function createRecipeHandler(req, res) {
    try {
        const {title, description, ingredients, steps, notes} = req.body;
        const user = req.user;
        const newRecipe = await createRecipe(title, description, ingredients, steps, notes, user);
        if (newRecipe && newRecipe.error) {
            res.status(400).json(newRecipe);
            return;
        }
        res.status(201).json(newRecipe);
    } catch (err) {
        if (err.code === "P2002") {
            res.status(404).json({ error: "A recipe with this name already exists"})
            return;
        } else {
            throw new Error(err);
        }
    }
    
}

export async function deleteRecipeHandler(req, res) {
    try {
        const result = await deleteRecipe(id);
        if (result && result.error) {
            res.status(400).json(result);
            return;
        }
        res.sendStatus(204);
    } catch (err) {
        if (err.code === "P2025") {
            res.status(404).json({ error: "Recipe not found" });
            return;
        } else {
            throw new Error(err);
        }
    }
}

export async function updateRecipeHandler(req, res) {
    try {
        const {title, description, ingredients, steps, notes} = req.body;
        const user = req.user;
        const id = req.params.id;
        const updatedRecipe = await updateRecipe(title, description, ingredients, steps, notes, user, id);
        if (updatedRecipe && updatedRecipe.error) {
            res.status(400).json(updatedRecipe);
            return;
        }
        res.status(201).json(updatedRecipe);
    } catch (err) {
        if (err.code === "P2025") {
            res.status(404).json({ error: "Recipe not found"})
            return;
        } else {
            throw new Error(err);
        }
    }
    

}   