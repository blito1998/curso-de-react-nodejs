const express = require("express");
const app = express();
const bodyParser = require("body-parser");

var USER = [
  { id: 1, username: "brunohauck", password: "123456" },
  { id: 2, username: "paul", password: "123456" },
];

var HELLO = [{ msg: "Hello Express" }];

function getHello() {
  return HELLO;
}

function getUsers() {
  return Users;
}

app.use(bodyParser.json());

app.get("/", function (req, res) {
  res.send(getHello());
});

app.get("/users", function (req, rest) {
  res.send(getUsers());
});
app.listen(4000, function () {
  console.log("Hello Express LIsten on Port 4000");
});
