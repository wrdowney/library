let myLibrary = [];

function Book(title, datePublished) {
    this.title = title;
    this.datePublished = datePublished;
}

function addBookToLibrary(book) {
    myLibrary.push(book);
}