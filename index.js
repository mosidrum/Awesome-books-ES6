import { Book } from './modules/Book.js';
import Nav from './modules/Nav.js';
import { UI } from './modules/UI.js';
import { Store } from './modules/Store.js';
import { DateTime } from './modules/Luxon.js';

document.addEventListener('DOMContentLoaded', UI.displayBooks);

document.querySelector('#book-form').addEventListener('submit', (e) => {
  e.preventDefault();
  const title = document.querySelector('#title').value;
  const author = document.querySelector('#author').value;

  const book = new Book(title, author);

  UI.addBookToList(book);

  Store.addBook(book);

  UI.clear();
});

document.querySelector('.container').addEventListener('click', (e) => {
  UI.deleteBook(e.target);
  Store.removeBook(e.target.previousElementSibling.textContent);
});

// Trying luxon as a module here
const showDate = document.querySelector('.date');
const date = DateTime.now().toLocaleString(DateTime.DATETIME_MED);
showDate.innerHTML = date;

Nav();
