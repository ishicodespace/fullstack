//templates inside views folder

const express = require("express");
const app = express();
const path = require("path");

app.set("views", path.join(__dirname, "views"));
const port = 3030;

app.listen(port, (req, res) => {
    console.log(`running on port ${port} `)
})

app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("home.ejs");
});

app.get("/rolldice", (req, res) => {
    let diceVal = Math.floor(Math.random() * 6) + 1;
    res.render("rolldice.ejs", { diceVal });
})