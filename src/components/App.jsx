import React from 'react';
import BookForm from './BookForm/BookForm';
// import { styled } from './BookingForm/styled'; // Правильний шлях до BookingForm
import booksData from '../books.json'; // Правильний шлях до books.json
import BookList from './BookList/BookList';

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
        <BookList onRemoveBook={this.onRemoveBook} books={this.state.books} />
      </div>
    );
  }
}
