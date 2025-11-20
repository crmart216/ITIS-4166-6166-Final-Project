import {
    getAllReviews,
    getReviewById,
    createReview,
    updateReview,
    deleteReview

} from "../services/reviewService.js";

export async function getAllReviewsHandler(req, res){
    const result = await getAllReviews(req.query);
    res.status(200).json(result);
}

export async function getReviewByIdHandler(req, res, next) {
  try {
    const reviewId = parseInt(req.params.id);
    const review = await getReviewById(reviewId); 
    res.status(200).json(review);
  } catch (err) {
    next(err);
  }
}

export async function createReviewHandler(req, res, next) {
  try {
    const { content, recipe_id } = req.body;

    const review = await createReview({
      content,
      recipe_id,
      userId: req.user.id
    });

    res.status(201).json(review);
  } catch (err) {
    next(err);
  }
}

export async function updateReviewHandler(req, res) {
  let id = parseInt(req.params.id);
  const updates = {};
  if (req.body.content) updates.content = req.body.content;
  const updatedReview = await updateReview(id, updates);
  res.status(200).json(updatedReview);
}

export async function deletePostHandler(req, res) {
  let id = parseInt(req.params.id);
  await deleteReview(id);
  res.status(204).send();
}