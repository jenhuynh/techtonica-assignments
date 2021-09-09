var express = require("express");
var router = express.Router();

//mock users
let USERS = [
  { name: "Marlin", email: "marlin@gmail.com", id: 1 },
  { name: "Nemo", email: "nemo@gmail.com", id: 2 },
  { name: "Dory", email: "dory@gmail.com", id: 3 },
];

/* GET users listing. */
router.get("/", function (req, res, next) {
  res.json(USERS);
});

router.post("/add", function (req, res) {
  const newUser = req.body;
  USERS.push(newUser);
  res.json(newUser);
});

// Delete a User
router.post("/delete/:id", function (req, res) {
  console.log("DELETE REQUEST");
  const id = Number(req.params.id);
  console.log(id);
  // remove item by id
  // you are automatically updating users w/ filter
  console.log(USERS);
  const xy = USERS.filter((user) => {
    console.log(user.id, id, user.id !== id);
    // only return things that don't have the id
    user.id !== id;
  });
  USERS = USERS.filter((user) => {
    console.log(user.id, id, user.id !== id);
    // only return things that don't have the id
    user.id !== id;
  });
  console.log(xy, USERS);
  //my response please set the http 204 which means no content and .end sends the response
  res.status(204).end();
});

module.exports = router;
