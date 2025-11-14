import {
    getAllReviews,
} from "../services/reviewService.js";

export async function getAllReviewsHandler(req, res){
    const result = await getAllReviews(req.query);
    res.status(200).json(result);
}