var express = require("express");
var router = express.Router();
var { db } = require("./database.js");
let events = [
  {
    id: 1,
    name: "Birthday",
    date: "2021-09-01",
    description: "A birthday party for my best friend",
    category: "Celebration",
  },

  {
    id: 2,
    name: "Graduation",
    date: "2021-08-01",
    description: "The class of 2021 graduates from East High",
    category: "Education",
  },

  {
    id: 3,
    name: "JS Study Session",
    date: "2021-10-01",
    description: "A chance to practice Javascript interview questions",
    category: "Education",
  },
];

/* GET home page. */
// router.get("/", function (req, res, next) {
//   res.render("index", { title: "This is my events route." });
// });

/* GET events listing. */
// router.get("/", function (req, res, next) {
//   // res.json(users);
//   //db.any takes two arguments which the first is the query and if the query has parameters and you want to serch depending on user with $1 which will need to be replaced by the second argument
//   db.any("SELECT * FROM events", [])

//     .then(function (data) {
//       res.json(data);
//       // success;
//     })
//     .catch(function (error) {
//       throw error;
//       // error;
//     });
// });

// // Delete an event
// router.delete("/:eventId", function (req, res) {
//   const id = Number(req.params.eventId);
//   //deletes specific id from users database
//   db.result("DELETE FROM events WHERE id = $1", [id])
//     .then((result) => {
//       // remove item by id
//       // you are automatically updating users w/ filter
//       // only return things that don't have the id
//       // only return things that don't have the id
//       events = events.filter((event) => event.id !== id);

//       //my response please set the http 204 which means no content and .end sends the response
//       res.status(204).end();
//       // rowCount = number of rows affected by the query
//       console.log(result.rowCount); // print how many records were deleted;
//     })
//     .catch((error) => {
//       console.log("ERROR:", error);
//     });
// });

module.exports = router;
