var express = require("express");
var router = express.Router();

//mock users
const users = [
  { name: "Marlin", email: "marlin@gmail.com", id: "1" },
  { name: "Nemo", email: "nemo@gmail.com", id: "2" },
  { name: "Dory", email: "dory@gmail.com", id: "3" },
];

/* GET users listing. */
router.get("/", function (req, res, next) {
  res.json(users);
});

router.post("/", function (req, res) {
  const newUser = req.body;
  users.push(newUser);
  res.json(newUser);
});

module.exports = router;
