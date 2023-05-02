/* eslint-disable import/prefer-default-export */
import { Store } from './store.js';

export class UI {
  static displayBooks() {
    const books = Store.getBooks();

    books.forEach((book) => UI.addBookToList(book));
  }

  static addBookToList(book) {
    const list = document.querySelector('.container');
    const inside = document.createElement('ul');
    inside.classList = 'book-holder';
    inside.innerHTML += `
      <p>${book.title}</p> <p class='by'>by</p> <p>${book.author}</p>
      <button class="delete">Remove</button>
     `;
    list.appendChild(inside);
  }

  static clear() {
    const title = document.querySelector('#title');
    const author = document.querySelector('#author');
    title.value = '';
    author.value = '';
  }

  static deleteBook(target) {
    if (target.classList.contains('delete')) {
      target.parentElement.remove();
    }
  }
}
