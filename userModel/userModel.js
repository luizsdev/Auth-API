const mongoose = require("mongoose");
const db = require("../config/config");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  email: {
    type: String,
    default: "----",
    required: true,
  },
  name: {
    type: String,
    default: "----",
    required: true,
  },
  lastName: {
    type: String,
    default: "----",
    required: true,
  },
  password: {
    type: String,
    default: "----",
    required: true,
  },
});
const userModel = db.model("users", userSchema);

module.exports = userModel;
