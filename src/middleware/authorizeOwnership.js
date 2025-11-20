import prisma from "../config/db.js";

export function authorizeOwnership(resource) {
  return async (req, res, next) => {
    try {
      const id = parseInt(req.params.id, 10);

      // 1. Fetch the resource
      const record = await prisma[resource].findUnique({
        where: { id },
      });

      if (!record) {
        const err = new Error(`${resource} not found`);
        err.status = 404;
        return next(err);
      }

      if (req.user.role !== "ADMIN" && record.author_id !== req.user.id) {
        const err = new Error("Forbidden: insufficient permission");
        err.status = 403;
        return next(err);
      }

      // All good
      return next();
    } catch (error) {
      next(error);
    }
  };
}
