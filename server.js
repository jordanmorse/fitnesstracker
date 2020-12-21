//requiring things to set up server
const express = require("express");
const mongoose = require("mongoose");
const morgan = require("morgan");
const PORT = process.env.PORT || 8080;
const app = express();
const controller = require("./routes/controllers.js");
const html = require("./routes/htmlRoutes.js")

app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(express.static("public"))

const URL = process.env.MONGODBURL || "mongodb://localhost/workouts"

mongoose.connect(URL, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useFindAndModify: false
  })

app.use(controller)
app.use(html)

app.listen(PORT, () => {console.log("app running queen!")}) 