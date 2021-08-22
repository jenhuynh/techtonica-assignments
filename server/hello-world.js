//creating simple endpoint
//import Express framework
const express = require('express');
//create Express app
const app = express();
//set our port
const port = 3000;
//created simple GET endpoint. When user hits endpoint, message will appear on homepage, so url is /
app.get('/', (req, res) => {
    res.send('Hello World, from express');
})

//start our clients
app.listen(port, () => console.log(`Hello world app listening on port ${port}!`))