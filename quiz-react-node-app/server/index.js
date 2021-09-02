// server/index.js
const express = require("express");

const PORT = process.env.PORT || 3001;
//require my config variable in a server-side file, destructure the config object to pinpoint just the variable that we want.
const { I_LOVE } = require("./config");

const app = express();
//Declaring I_LOVE gives that variable name to everything that config.js exported. Destructuring assignment unpacks the config object, picking out specific variables. Essentially, adding brackets is the same as saying:

console.log("I love", I_LOVE);
//creating api route, backend will send message
app.get("/api", (req, res) => {
  res.json({ message: "Hello from server!" });
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
