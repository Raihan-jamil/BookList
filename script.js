let form = document.querySelector('#book-form');


class Book {
    constructor(title, author, isbn) {
        this.title = title;
        this.author = author;
        this.isbn = isbn;
    }
}

//UI class

class UI {
    constructor() {

    }
    addToBooklist(book) {
        let list = document.querySelector('#book-list');
        let row = document.createElement('tr');
        row.innerHTML = `
        <td>${book.title}</td>
        <td>${book.author}</td>
        <td>${book.isbn}</td>
        <td><a href='#' class="delete">X</a></td>`;

        list.appendChild(row);
    }
    clearFields() {
        document.querySelector("#title").Value = '';
        document.querySelector("#author").Value = '';
        document.querySelector("#isbn").Value = '';
    }
    showAlert(message, className) {
        let div = document.createElement('div');
        div.className = 'alert ${className}';
        div.appendChild(document.createTextNode(message));
        let container = document.querySelector('.container');
        let form = document.querySelector('#book-form');
        container.insertBefore(div, form);
        
        setTimeout(() => {
            document.querySelector('.alert').remove();
        }, 3000);
    }

}

form.addEventListener('submit', newBook);

function newBook(e) {
    let title = document.querySelector("#title").nodeValue,
    author = document.querySelector("#author").nodeValue,
    isbn = document.querySelector("#isbn").Value;

    let ui = new UI();
    if(title === '' || author === '' || isbn === ''){

      ui.showAlert("please fill all the fields!", "error");
    }else {

    let book = new Book(title, author, isbn);

    ui.addToBooklist(book);
    ui.clearFields();
    ui.showAlert("Book Added!", "success");
    }

    e.preventDefault();
}