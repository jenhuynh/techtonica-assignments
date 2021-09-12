var express = require("express");
var router = express.Router();
var pgp = require("pg-promise")(/* options */);
//creating connection to database
//connection string which describes how to connect to the database
var db = pgp("postgres://eventonica:1234@localhost/eventonica");

//mock users
let users = [
  // { name: "Jair", email: "jair@gmail.com", id: 1 },
  // { name: "Nemo", email: "nemo@gmail.com", id: 2 },
  // { name: "Dory", email: "dory@gmail.com", id: 3 },
];

/* GET users listing. */
router.get("/", function (req, res, next) {
  // res.json(users);
  //db.any takes two arguments which the first is the query and if the query has parameters and you want to serch depending on user with $1 which will need to be replaced by the second argument
  db.any("SELECT * FROM users", [])

    .then(function (data) {
      res.json(data);
      // success;
    })
    .catch(function (error) {
      throw error;
      // error;
    });
});

router.post("/", function (req, res) {
  const newUser = req.body;
  db.none("INSERT INTO users(name, email) VALUES($1, $2)", [
    newUser.name,
    newUser.email,
  ])
    .then(() => {
      res.json(newUser);
      // success;
    })
    .catch((error) => {
      throw Error;
      // error;
    });
});

// Delete a User
router.delete("/:userId", function (req, res) {
  const id = Number(req.params.userId);
  //deletes specific id from users database
  db.result("DELETE FROM users WHERE id = $1", [id])
    .then((result) => {
      // remove item by id
      // you are automatically updating users w/ filter
      // only return things that don't have the id
      // only return things that don't have the id
      users = users.filter((user) => user.id !== id);

      //my response please set the http 204 which means no content and .end sends the response
      res.status(204).end();
      // rowCount = number of rows affected by the query
      console.log(result.rowCount); // print how many records were deleted;
    })
    .catch((error) => {
      console.log("ERROR:", error);
    });
});

module.exports = router;
