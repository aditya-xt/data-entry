const mongoose = require("mongoose");

const TestSchema = new mongoose.Schema({
  fname: {
    type: String,
    required: true,
    maxlength: 50
  },
  lname: {
    type: String,
    required: true,
    maxlength: 50
  },
  email: {
    type: String,
    required: true,
  },
  phone: {
    type: Number,
    required: true,
    maxlength: 10,
    minlength: 10
  },
  password: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Branches", TestSchema);
