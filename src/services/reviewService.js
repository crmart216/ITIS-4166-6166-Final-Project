import { Prisma } from "../generated/prisma/index.js";

import {
    getAll,
    findReviewById,
    create,
    findRecipeById,
    update,
    remove

} from "../repositories/reviewRepo.js";

export async function getAllReviews(filter){
    return await getAll(filter);
}

export async function getReviewById(id) {
    let result = await findReviewById(id);
    if (result) return result;
    else {
        const error = new Error(`Cannot find review with id ${id}`);
        error.status = 404;
        throw error;
    }
}

export async function createReview({ content, recipe_id, userId }) {
  const recipe = await findRecipeById(recipe_id);

  if (!recipe) {
    throw new Error("Recipe does not exist");
  }

  return await create({
    content,
    recipe_id: parseInt(recipe_id),
    author_id: userId
  });
}

export async function updateReview(id, data) {
  const updatedReview = await update(id, data);
  if (updatedReview) return updatedReview;
  else {
    const error = new Error(`Cannot find review with id ${id}`);
    error.status = 404;
    throw error;
  }
}

export async function deleteReview(id) {
  const result = await remove(id);
  if (result) return;
  else {
    const error = new Error(`Cannot find review with id ${id}`);
    error.status = 404;
    throw error;
  }
}