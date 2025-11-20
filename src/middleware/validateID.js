export function validateIdParam(paramName = "id") {
  return (req, res, next) => {
    const raw = req.params[paramName];
    //console.log("validateIdParam running for:", raw);

    const id = parseInt(raw, 10);

    if (isNaN(id) || id < 1) {
      const error = new Error(`${paramName} must be a positive integer`);
      error.status = 400;
      return next(error);
    }

    req.params[paramName] = id;
    return next();
  };
}
