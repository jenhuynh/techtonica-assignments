// holds the logic to updating/deleting books and displaying them on the page to retreive all books using browser-side JavaScript and our REST API
const setEditModal = (isbn) => {
     // Get information about the book using isbn, use the setEditModal method to gather information about the book when "Edit" button is clicked.
    //  var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
     const xhttp = new XMLHttpRequest();

     xhttp.open("GET", `http://localhost:3000/book/${isbn}`, false);
     xhttp.send();
 
     const book = JSON.parse(xhttp.responseText);
 
     const {
         title,
         author,
         publisher,
         publish_date,
         numOfPages
     } = book;
 
     // Filling information about the book in the form inside the modal
     document.getElementById('isbn').value = isbn;
     document.getElementById('title').value = title;
     document.getElementById('author').value = author;
     document.getElementById('publisher').value = publisher;
     document.getElementById('publish_date').value = publish_date;
     document.getElementById('numOfPages').value = numOfPages;
 
     // Setting up the action url for the book, the form's action parameter with the clicked book's URL to send the request:
     document.getElementById('editForm').action = `http://localhost:3000/book/${isbn}`;
}

//implementing deletebook method to delete books by ISBN numbers
const deleteBook = (isbn) => {
    const xhttp = new XMLHttpRequest();

    xhttp.open("DELETE", `http://localhost:3000/book/${isbn}`, false);
    xhttp.send();

    // Reloading the page
    location.reload();
}

const loadBooks = () => {
    const xhttp = new XMLHttpRequest();
//sending a GET request to the endpoint of 3000/books
    xhttp.open("GET", "http://localhost:3000/books", false);
    xhttp.send();

    const books = JSON.parse(xhttp.responseText);

    for (let book of books) {
        const x = `
            <div class="col-4">
                <div class="card">
                    <div class="card-body">
                        <h5 class="card-title">${book.title}</h5>
                        <h6 class="card-subtitle mb-2 text-muted">${book.isbn}</h6>

                        <div>Author: ${book.author}</div>
                        <div>Publisher: ${book.publisher}</div>
                        <div>Number Of Pages: ${book.numOfPages}</div>

                        <hr>

                        <button type="button" class="btn btn-danger">Delete</button>
                        <button types="button" class="btn btn-primary" data-toggle="modal"
                            data-target="#editBookModal" onClick="setEditModal(${book.isbn})">
                            Edit
                        </button>
                    </div>
                </div>
            </div>
        `

        document.getElementById('books').innerHTML = document.getElementById('books').innerHTML + x;
    }
}

loadBooks();