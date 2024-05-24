const express = require("express");
const app = express();
const port = 3000;
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const jobRouter = require("./routers/job");

dotenv.config();

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log("Connected to v2 DB"))
  .catch((err) => console.log(err));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/api/jobs", jobRouter);
app.listen(process.env.PORT || port, () =>
  console.log(` to Hub is listening on port ${process.env.PORT}!`)
);
