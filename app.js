const express = require("express");
const userRouter = require("./routes/userRoutes.js");
const AppError = require("./utils/appError.js");
const app = express();
// Body parser, reading data from body into req.body
app.use(express.json({ limit: "10kb" }));
app.use("/api/v1/users", userRouter);
app.all("*", (req, res, next) => {
  next(new AppError(`Can't find ${req.originalUrl} on this server!`, 404));
});
module.exports = app;
