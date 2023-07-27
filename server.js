const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const authRoutes = require("./src/routers/auth");
require("dotenv").config();

// routers -> paths -> address -> url
app.use("/auth", authRoutes);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//db connection
mongoose
  .connect("mongodb://localhost/ecomm", {})
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.error("Failed to connect to MongoDB", err);
  });


app.listen(3000, () => {
  console.log(`Server is up and running on 3000 ...`);
});
