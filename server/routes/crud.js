const route = require("express").Router();
const TestModel = require("../models/testModel");

const home = route.get("/", (req, res) => {
  res.send("Home");
});

const getAllCollege = route.get("/getAllCollege", (req, res) => {
  res.send("getAllCollege");
});

const enterCollege = route.get("/enterCollege", (req, res) => {
  //   const ct = req.body;
  //   console.log(ct);

  //   const city = [...ct];
  //   console.log(city);

  const obj = {
    fname: "Aditya",
    lname: "Singh",
    email: "AdityaSingh@example.com",
    phone: 75759983,
    password: "AKMovies",
  };

  TestModel.insertMany(obj)
    .then(console.log(" All Data Inserted Successfully"))
    .catch((err) => {
      console.log(" Failed "), console.log(err);
    });
  res.send("enterCollege");
});

const deleteCollege = route.get("/deleteCollege", (req, res) => {
  res.send("deleteCollege");
});

module.exports = { home };
