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

app.get("/term", function (req, res) {
  res.render("term");
});

app.get("/registerasprofessional", function (req, res) {
  res.render("Register");
});

app.get("/about", function (req, res) {
  res.render("About");
});

app.get("/review", function (req, res) {
  res.render("review");
});

app.get("/privacy", function (req, res) {
  res.render("privacy");
});

app.get("/contact", function (req, res) {
  res.render("contact");
});

app.get("/services", function (req, res) {
  res.render("service");
});

app.get("/addons", function (req, res) {
  res.render("addon");
});

app.get("/agreement", function (req, res) {
  res.render("agreement");
});

app.get("/phone", function (req, res) {
  res.render("phone");
});

app.get("/verification", function (req, res) {
  res.render("verification");
});

app.get("/location", function (req, res) {
  res.render("location");
});

app.get("/locationform", function (Req, res) {
  res.render("locform");
});

app.get("/paydetails", function (req, res) {
  res.render("paydetails");
});

app.get("/offers", function (req, res) {
  res.render("offers");
});

app.get("/payment", function (req, res) {
  res.render("payment");
});

app.listen(3000, function () {
  console.log("Serve on Door is running successfully...");
});
