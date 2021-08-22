//building the book api
//import Express framework
const express = require('express');
//import body-parser aka the express middleware and passing it to the app.use method, will be grabbing the HTTP body, decoding the information, and appending it to the req.body
const bodyParser = require('body-parser');
const cors = require('cors');

//connect to HTML doc to the server
// create the app
const app = express();
// set the port
const port = 3000;
// accessing the public folder where the cat loves
app.use(express.static('public'));
// connect html file
app.get('/index.html', function (req, res) {
  res.sendFile(__dirname + '/' + 'index.html');
});


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
    },
    {
        "isbn": "9781933771748",
        "title": "You Don't Have to Learn the Hard Way: Making it in the Real World - A Guide for Graduates",
        "author": "J.R. Parrish",
        "publish_date": "2018-5-3",
        "publisher": "Crown",
        "numOfPages": 224
    }];

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
   books.push(book);

   res.send('Book is added to the database')
});

//creates an endpoint to get all the books from the API
app.get('/books', (req, res) => {
    res.json(books);
});

//retrieving a single book by isbn from an array
app.get('/book/:isbn', (req, res) => {
    // Reading isbn from the URL
    const isbn = req.params.isbn;

    // Searching books for the isbn
    for (let book of books) {
        if (book.isbn === isbn) {
            res.json(book);
            return;
        }
    }

    // Sending 404 when not found something is a good practice
    res.status(404).send('Book not found');
});

// To delete items, we use the HTTP DELETE method and specify a book using its ISBN number, just like how we retrieved it
//using the app.delete method to accept DELETE requests
app.delete('/book/:isbn', (req, res) => {
    // reading isbn from the URL
    const isbn = req.params.isbn;

    // remove item from the books array, used the array filter method to filter out the book with the relevant ISBN to remove it from the array
    books = books.filter(i => {
        if (i.isbn !== isbn) {
            return true;
        }

        return false;
    });

    // sending 404 when not found something is a good practice
    res.send('Book is deleted');
});

//editing books and updating them, sending a POST request, aimed at a specific ISBN, the adequate book is updated with new information. 
app.post('/book/:isbn', (req, res) => {
    // Reading isbn from the URL
    const isbn = req.params.isbn;
    const newBook = req.body;

    // Remove item from the books array
    for (let i = 0; i < books.length; i++) {
        let book = books[i]
        if (book.isbn === isbn) {
            books[i] = newBook;
        }
    }

    res.send('Book is edited');
});

app.listen(port, () => console.log(`Hello world app listening on port ${port}!`));