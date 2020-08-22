const mongoose = require("mongoose")
const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 3001;
const app = express();

// middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// mongo db heroku and local connection
mongoose.connect(process.env.MONGOD_URI || "mongodb://localhost/googlebooks" , {useNewUrlParser: true, useUnifiedTopology: true})

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// api route to index for deployed build
app.get("*", function (req, res) {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
})


app.listen(PORT, function () {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
})