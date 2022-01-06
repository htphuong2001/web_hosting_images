require("dotenv").config();
const path = require("path");
const createError = require("http-errors");
const express = require("express");
const logger = require("morgan");

const indexRouter = require("./routes/index");

const app = express();
const port = process.env.PORT || 8080;

// Connect db
require("./helpers/connection_mongodb").connect();

// Logger
app.use(logger("dev"));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Static file
app.use("/assets", express.static(path.join(__dirname, "public")));

// EJS engine
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

//Router
app.use("/", indexRouter);

// catch 404 and forward to error handler
app.use((req, res, next) => {
  next(createError.NotFound());
});

// error handler
app.use((err, req, res, next) => {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("pages/error");
});

app.listen(port, () => {
  console.log(`App listening at port ${port}`);
});
