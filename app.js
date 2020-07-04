//Book Constructor
function Book(title, author, isbn) {
    this.title = title;
    this.author = author;
    this.isbn = isbn;
}

//UI Constructor
function UI() {

}
//Add Book to list
UI.prototype.addBookToList = function (book) {

}

//Event listeners
document.getElementById('book-form').addEventListener('submit',
    function (e) {
        const title = document.getElementById('title').value,
            author = document.getElementById('author').value,
            isbn = document.getElementById('isbn').value

        //Instantiate book
        const book = new Book(title, author, isbn);

        //Instantiate UI
        const UI = new UI();

        //Add book to list
        ui.addBookToList(book);

        e.preventDefault();
    });