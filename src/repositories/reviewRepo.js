import prisma from "../config/db.js";

export async function getAll(filter){
    const reviews = await prisma.review.findMany({
        select: {
            id: true,
            content: true,
            author_id: true,
            recipe_id: true,
        },
        orderBy: {id: "asc"},
    });
    return reviews;
} 

export async function findReviewById(id) {
    return await prisma.review.findUnique({where: { id}});
}

export async function create(data) {
  return await prisma.review.create({
    data
  });
}

export async function update(id, updates) {
  try {
    const updatedReview = await prisma.review.update({
      where: { id },
      data: updates,
    });
    return updatedReview;
  } catch (error) {
    if (error.code === 'P2025') return null;
    throw error;
  }
}

export async function remove(id) {
  try {
    const deletedReview = await prisma.review.delete({
      where: { id },
    });
    return deletedReview;
  } catch (error) {
    if (error.code === 'P2025') return null;
    throw error;
  }
}

export async function findRecipeById(id) {
  return await prisma.recipe.findUnique({
    where: { id: parseInt(id) }
  });
}