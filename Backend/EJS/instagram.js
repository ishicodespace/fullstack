const express = require("express");
const app = express();
const path = require("path");

const port = 8080;
app.listen(port, (req, res) => {
    console.log(`listening on port: ${port}`);
})

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.static(path.join(__dirname, "public/css")));
app.use(express.static(path.join(__dirname, "public/js")));

app.get("/ig/:username", (req, res) => {
    // let followers=["alice","bob","charlie","dave","eve"];
    // const username = req.params.username;
    let { username } = req.params;
    const instaData = require("./data.json");
    // console.log(instaData);
    let data = instaData[username];
    console.log(data);
    res.render("instagram.ejs", { data });
})