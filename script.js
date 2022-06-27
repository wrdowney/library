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
    resetBookGrid();
    myLibrary.forEach(b => {
        createBookCard(b);
    })
}

const createBookCard = (book) => {
    const bookCard = document.createElement('div')
    const title = document.createElement('p')
    const author = document.createElement('p')
    const pages = document.createElement('p')
    const buttonGroup = document.createElement('div')
    const removeBtn = document.createElement('button')

    bookCard.classList.add('book-card')
    buttonGroup.classList.add('button-group')
    removeBtn.classList.add('btn')
    // removeBtn.onclick = removeBook

    title.textContent = `"${book.title}"`
    author.textContent = book.author
    pages.textContent = `${book.pages} pages`
    removeBtn.textContent = 'Remove'

    bookCard.appendChild(title)
    bookCard.appendChild(author)
    bookCard.appendChild(pages)
    buttonGroup.appendChild(removeBtn)
    bookCard.appendChild(buttonGroup)
    bookGrid.appendChild(bookCard)
    }

const resetBookGrid = () => {
    bookGrid.innerHTML = '';
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