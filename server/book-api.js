//building the book api
//import Express framework
const express = require('express');
//import body-parser aka the express middleware and passing it to the app.use method, will be grabbing the HTTP body, decoding the information, and appending it to the req.body
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 3000;

//books array to store our collection of books, simulating a database
let books = [{
    "isbn": "9781593275846",
    "title": "Here's to Your Success",
    "author": "Jeff Keller",
    "publish_date": "2007-7-1",
    "publisher": "Attitude is Everything, Inc.",
    "numOfPages": 264
},
    {
        "isbn": "9781250012579",
        "title": "Eleanor & Park",
        "author": "Rainbow Rowell",
        "publish_date": "2013-2-26",
        "publisher": "St. Martin's Griffin",
        "numOfPages": 333
    },
    {
        "isbn": "9781524763138",
        "title": "Becoming",
        "author": "Michelle Obama",
        "publish_date": "2018-11-13",
        "publisher": "Crown",
        "numOfPages": 448
    }

];

//app.use method will enable it as middleware to the Express app instance
app.use(cors());

//configuring body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//app.post method will let us add the book to the book array
app.post('/book', (req, res) => {
   const book = req.body;

   //outbook the book to the console for debugging
   console.log(book);
   book.push(book);

   res.send('Book is added to the database')
});

//creates an endpoint to get all the books from the API
app.get('/books', (req, res) => {
    res.json(books);
});

app.listen(port, () => console.log(`Hello world app listening on port ${port}!`));