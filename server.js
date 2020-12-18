const models = require("./models/workout.js");
const express = require("express");
const mongoose = require("mongoose");
const PORT = process.env.PORT || 8080;
const app = express();

app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(express.static("public"))

const URL = process.env.MONGODBURL || "mongodb://localhost/workout"

mongoose.connect(URL, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useFindAndModify: false
  })

app.listen(PORT, () => {console.log("app running queen!")}) 