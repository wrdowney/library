let myLibrary = [];

let formContainer = document.querySelector(".form-popup");
let form = document.querySelector("form");
let submitBtn = document.getElementById("submit-btn");
let addButton = document.getElementById('add-btn');
let bookGrid = document.getElementById("book-grid");


addButton.addEventListener("click", () => {
    formContainer.style.display = 'block';
})

function Book(title, author, numPages) {
    this.title = title;
    this.author = author;
    this.numPages = numPages;
}

const addBook = (e) => {
    e.preventDefault();
    const newBook = getBookFromInput();
    addBookToLibrary(newBook);
    formContainer.style.display = 'none';
    updateBookGrid()
}

const updateBookGrid = () => {

}

const resetBookGrid = () => {

}

function addBookToLibrary(book) {
    myLibrary.push(book);
}

function displayLibrary(library) {

}

const getBookFromInput = () => {
    const title = document.getElementById('book-title').value
    const author = document.getElementById('book-author').value
    const pages = document.getElementById('book-pages').value
    return new Book(title, author, pages)
}


form.onsubmit = addBook;