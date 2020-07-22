var express = require("express");
var app = express();

app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));

app.get("/", function (req, res) {
  res.render("landing");
});

app.get("/homepage", function (req, res) {
  res.render("homepage");
});

app.get("/login", function (req, res) {
  res.render("login");
});

app.get("/signup", function (req, res) {
  res.render("signup");
});

app.get("/blog", function (req, res) {
  res.render("blog");
});

app.get("/registerasprofessional", function (req, res) {
  res.render("Register");
});

app.get("/about", function (req, res) {
  res.render("About");
});

app.listen(3000, function () {
  console.log("Serve on Door is running successfully...");
});
