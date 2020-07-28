const dotenv = require("dotenv").config();
const express = require("express");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const bodyParser = require("body-parser");

const indexRouter = require("./routes/search");
const port = 3001;
const app = express();
const router = express.Router();

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use("/search", indexRouter);
app.listen(port, () =>
  console.log(`Example app listening at http://localhost:${port}`)
);
module.exports = app;
