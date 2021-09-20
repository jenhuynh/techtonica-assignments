var pgp = require("pg-promise")(/* options */);
//creating connection to database
//connection string which describes how to connect to the database
var db = pgp("postgres://eventonica:1234@localhost/eventonica");

module.exports = { db: db };
