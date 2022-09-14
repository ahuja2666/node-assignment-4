const express = require('express')
const app = express()
const bodyParser = require("body-parser");
const port = 3000
app.use(express.urlencoded());

// Parse JSON bodies (as sent by API clients)
app.use(express.json());


app.use(bodyParser.urlencoded({ extended: false }))

app.use(bodyParser.json())
// your code goes here
app.get("/", (req, res) => {
  res.send("Hello world!");
})

app.post("/add", (req, res) => {
  let num1 = Number(req.body.num1);
  let num2 = Number(req.body.num2);
  let sum = num1 + num2;

  if (num1 < -1000000 || num2 < -1000000 || sum < -1000000) {
    res.json({
      status: "error",
      message: "Underflow",
    });
  } else if (num1 > 1000000 || num2 > 1000000 || sum > 1000000) {
    res.json({
      status: "error",
      message: "Overflow",
    });
  } else if (req.body.num1 == "" || req.body.num2 == "") {
    res.json({
      status: "error",
      message: "Invalid data types",
    });
  } else if (isNaN(num1) || isNaN(num2)) {
    res.json({
      status: "error",
      message: "Invalid data types",
    });
  } else if (!isNaN(sum)) {
    res.json({
      status: "success",
      message: "the sum of given two numbers",
      sum: sum
    });
  } else {
    res.json({
      status: "failure"
    });
  }
})

app.post("/sub", (req, res) => {
  let num1 = Number(req.body.num1);
  let num2 = Number(req.body.num2);
  let sum = num1 - num2;

  if (num1 < -1000000 || num2 < -1000000 || sum < -1000000) {
    res.json({
      status: "error",
      message: "Underflow",
    });
  } else if (num1 > 1000000 || num2 > 1000000 || sum > 1000000) {
    res.json({
      status: "error",
      message: "Overflow",
    });
  } else if (req.body.num1 == "" || req.body.num2 == "") {
    res.json({
      status: "error",
      message: "Invalid data types",
    });
  } else if (isNaN(num1) || isNaN(num2)) {
    res.json({
      status: "error",
      message: "Invalid data types",
    });
  } else if (!isNaN(sum)) {
    res.json({
      status: "success",
      message: "the difference of given two numbers",
      sum: sum
    });
  } else {
    res.json({
      status: "failure"
    });
  }
})

app.post("/multiply", (req, res) => {
  let num1 = Number(req.body.num1);
  let num2 = Number(req.body.num2);
  let sum = num1 * num2;
  if (num1 < -1000000 || num2 < -1000000 || sum < -1000000) {
    res.json({
      status: "error",
      message: "Underflow",
    });
  } else if (num1 > 1000000 || num2 > 1000000 || sum > 1000000) {
    res.json({
      status: "error",
      message: "Overflow",
    });
  } else if (req.body.num1 == "" || req.body.num2 == "") {
    res.json({
      status: "error",
      message: "Invalid data types",
    });
  } else if (isNaN(num1) || isNaN(num2)) {
    res.json({
      status: "error",
      message: "Invalid data types",
    });
  } else if (!isNaN(sum)) {
    res.json({
      status: "success",
      message: "The product of given numbers",
      sum: sum
    });
  } else {
    res.json({
      status: "failure"
    });
  }
})

app.post("/divide", (req, res) => {
  let num1 = Number(req.body.num1);
  let num2 = Number(req.body.num2);

  let sum = num1 / num2;
  if (num2 === 0) {
    res.json({
      status: "error",
      message: "Cannot divide by zero",
    });
  } else if (num1 < -1000000 || num2 < -1000000 || sum < -1000000) {
    res.json({
      status: "error",
      message: "Underflow",
    });
  } else if (num1 > 1000000 || num2 > 1000000 || sum > 1000000) {
    res.json({
      status: "error",
      message: "Overflow",
    });
  } else if (req.body.num1 == "" || req.body.num2 == "") {
    res.json({
      status: "error",
      message: "Invalid data types",
    });
  } else if (isNaN(num1) || isNaN(num2)) {
    res.json({
      status: "error",
      message: "Invalid data types",
    });
  } else if (!isNaN(sum)) {
    res.json({
      status: "success",
      message: "The division of given numbers",
      sum: sum
    });
  } else {
    res.json({
      status: "failure"
    });
  }
})

app.listen(port, () => console.log(`App listening on port ${port}!`))

module.exports = app;