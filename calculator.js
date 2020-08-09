const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", function (req, res) {
  res.sendFile(__dirname + "/index.html");
});

app.get("/bmiCalculator", function (req, res) {
  res.sendFile(__dirname + "/bmiCalculator.html");
});

app.post("/bmiCalculator", function (req, res) {
  console.log(req.body);
  var num1 = parseFloat(req.body.weight);
  var num2 = parseFloat(req.body.height);
  var result = num1 / (num2 * num2);

  res.send(
    "Results of the BMI calculations are " +
      result +
      "<a href='bmiCalculator'> Go Back!</a>"
  );
});

app.post("/", function (req, res) {
  console.log(req.body);
  var num1 = Number(req.body.num1);
  var num2 = Number(req.body.num2);
  var result = num1 + num2;

  res.send("Results of the calculations are " + result);
});

app.listen(3000, function () {
  console.log("Server has started on port 3000");
});
