const router = require("express").Router();
const bcrypt = require("bcrypt");
const userModel = require("../userModel/userModel");

router.post("/register", async (req, res) => {
  const { email, name, lastName, password } = req.body;
  const checkExist = await userModel.findOne({ email: req.body.email });
  if (checkExist) {
    res.send("User already exists");
  } else {
    bcrypt.genSalt(10, (err, salt) => {
      bcrypt.hash(password, salt, (err, hash) => {
        if (err) {
          res.send("There was an error");
        } else {
          userModel.create({ email, name, lastName, password: hash });
          res.send("User created sucessfully");
        }
      });
    });
  }
});

router.post("/login", (req, res) => {
  const { email, password } = req.body;
  userModel
    .findOne({ email: email })
    .then((found) => {
      bcrypt.compare(password, found.password, (err, r) => {
        if (r) {
          res.send("Logged in sucessfully");
        } else {
          res.send("Wrong e-mail or password");
        }
      });
    })
    .catch((e) => {
      res.send(e);
    });
});

module.exports = router;
