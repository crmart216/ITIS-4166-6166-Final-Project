import {
    createRecipeCategory,
    deleteRecipeCategory,
    updateRecipeCategory,
} from '../services/recipeCategoryService.js';

export async function createRecipeCategoryHandler(req, res){
    const data = {
        name: req.body.name,
    }
    let newRecipeCategory = await createRecipeCategory(data);
    res.status(201).json(newRecipeCategory);
}

export async function updateRecipeCategoryHandler(req, res){
    let id = parseInt(req.params.id);
    const updates = {};
    if(req.body.name) updates.name = req.body.name;
    const updatedRecipeCategory = await updateRecipeCategory(id, updates);
    res.status(200).json(updateRecipeCategory);
}

export async function deleteRecipeCategoryHandler(req, res){
    let id = parseInt(req.params.id);
    await deleteRecipeCategory(id);
    res.status(204).send();
}