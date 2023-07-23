import React from 'react';
import BookForm from './BookForm/BookForm';
// import { styled } from './BookingForm/styled'; // Правильний шлях до BookingForm
import booksData from '../books.json'; // Правильний шлях до books.json

const books = booksData.books;

export class App extends React.Component {
  state = {
    books: books,
  };

  onRemoveBook = bookId => {
    console.log(bookId);
    this.setState({
      books: this.state.books.filter(book => book.id !== bookId),
    });
  };

  onAddBook = bookData => {
    console.log(bookData);
    const finalBook = {
      ...bookData,
      id: (Math.random() * 10).toString(),
    };
    this.setState({
      books: [finalBook, ...this.state.books],
    });
  };
  render() {
    return (
      <div>
        <BookForm title="BookForm" onAddBook={this.onAddBook} />
        <ul>
          {this.state.books.map(book => (
            <li key={book.id}>
              <button onClick={() => this.onRemoveBook(book.id)}>
                &times;
              </button>
              <h3>{book.title}</h3>
              <h3>{book.author}</h3>
              <p>{book.year}</p>
              <p>{book.genre}</p>
              <p>Favourite: {book.favourite ? '+' : '-'}</p>
              <img src={book.cover} alt={book.title} width="270" />
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
