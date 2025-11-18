import { Prisma } from "../generated/prisma/index.js";

import {
    getAll
} from "../repositories/reviewRepo.js";

export async function getAllReviews(filter){
    return await getAll(filter);
}