var express = require("express");
var router = express.Router();

//mock users
let users = [
  { name: "Marlin", email: "marlin@gmail.com", id: 1 },
  { name: "Nemo", email: "nemo@gmail.com", id: 2 },
  { name: "Dory", email: "dory@gmail.com", id: 3 },
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

// Delete a User
router.delete("/:userId", function (req, res) {
  // remove item by id
  // you are automatically updating users w/ filter
  // only return things that don't have the id
  // only return things that don't have the id
  const id = Number(req.params.userId);
  users = users.filter((user) => user.id !== id);
  //my response please set the http 204 which means no content and .end sends the response
  res.status(204).end();
});

module.exports = router;
