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