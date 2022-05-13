const mongoose = require("mongoose");
const uri = "mongodb://localhost:27017/userSystem";

mongoose
  .connect(uri)
  .then(() => {
    console.log("Succesfully connected");
  })
  .catch((e) => console.log(e));

const connection = mongoose.connection;

module.exports = connection;
