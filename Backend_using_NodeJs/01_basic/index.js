
require('dotenv').config()

const express = require("express");
const app = express();
const port = 4000;

app.get("/", (req, res) => {
  res.send("Hello Backend!");
});

app.get("/id", (req, res) => {
    res.send("Pshycodr")
})

app.get("/name", (req, res) => {
    res.send("<h1>Anish Roy</h1>")
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`);
});
