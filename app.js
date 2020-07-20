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

app.listen(3000, function () {
  console.log("Serve on Door is running successfully...");
});
