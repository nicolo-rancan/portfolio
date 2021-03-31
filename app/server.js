const path = require("path");
const express = require("express");
const app = express();

require("dotenv").config();

app.set("view engine", "ejs");
app.set("views", path.join(__dirname + "/src/views"));
app.use(express.static(path.join(__dirname + "/src/public")));

app.get(["/", "/index", "/index.html"], (req, res) => {
  res.redirect("/home");
});

app.get(["/home", "/about", "/knowledges", "/projects", "/contacts"], (req, res) => {
  let url = req.originalUrl.split("/").pop();
  res.render("home", {section: url});
});

app.listen(process.env.port, () => {
  console.clear();
  console.log(`Server online! (http://localhost:${process.env.port})`);
});

