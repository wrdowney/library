let myLibrary = [];

let form = document.querySelector(".form-popup");



let addButton = document.getElementById('add-btn');
addButton.addEventListener("click", () => {
    form.style.display = 'block';
})

function Book(title, datePublished) {
    this.title = title;
    this.datePublished = datePublished;
}

function addBookToLibrary(book) {
    myLibrary.push(book);
}

function displayLibrary(library) {

}