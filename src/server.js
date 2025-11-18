import dotenv from "dotenv";
dotenv.config();

import express from "express";
import userRoutes from "./routes/userRoutes.js";
import cookieParser from "cookie-parser";
const app = express();
const PORT = process.env.PORT || 3000;

if (process.env.NODE_ENV === "development") {
  const morganModule = await import("morgan");
  const morgan = morganModule.default;
  app.use(morgan("tiny"));
}

app.use(express.json());
app.use(cookieParser());
/* Inlcude routes here */

/* 
function used to show route requests in console for testing/ uncomment if needed
app.use((req, res, next) => {
  console.log("Incoming request:", req.method, req.path);
  next();
});
*/
app.use("/users", userRoutes);

/* Basic error handling*/
app.use((req, res, next) => {
  const err = new Error("Not Found");
  err.status = 404;
  next(err);
});

app.use((err, req, res, next) => {
  console.log(err.stack);
  if (!err.status) {
    err.status = 500;
    err.message = "Internal Server Error";
  }
  res.status(err.status).json({ error: err.message });
});
/* Start server */
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
