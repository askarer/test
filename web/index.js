const express = require("express");
const axios = require("axios");
const path = require("path");

const app = express();
const port = 3200;

const api = process.env.api || 'http://localhost:3100';

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.get("/", (req, res) => {
    txtFileContent = axios.get(api).then((data) => {
        res.render("index", data);
    });
});

app.listen(port, () => {
  console.log(`web is listening on port ${port}`);
});
