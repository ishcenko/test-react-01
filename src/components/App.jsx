import React from 'react';
import BookForm from './BookForm/BookForm';
import Modal from './Modal/Modal';
// import { styled } from './BookingForm/styled'; // Правильний шлях до BookingForm
import booksData from '../books.json'; // Правильний шлях до books.json
import BookList from './BookList/BookList';

const books = booksData.books;

export class App extends React.Component {
  state = {
    books: books,
    modal: {
      isOpen: false,
      visibleData: null,
    },
  };

  onRemoveBook = bookId => {
    // console.log(bookId);
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

  onOpenModal = data => {
    this.setState({
      modal: {
        isOpen: true,
        visibleData: data,
      },
    });
  };

  onCloseModal = () => {
    this.setState({
      modal: {
        isOpen: false,
        visibleData: null,
      },
    });
  };

  componentDidMount() {
    const stringifiedBooks = localStorage.getItem('books');
    const books = JSON.parse(stringifiedBooks) ?? [];
    this.setState({ books });
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.modal.isOpen !== this.state.isOpen) {
      console.log('Відкрив або закрив модалку');
    }

    if (prevState.books.length !== this.state.books.length) {
      const stringifiedBooks = JSON.stringify(this.state.books);
      localStorage.setItem('books', stringifiedBooks);
    }

    console.log(prevState.modal);
    console.log(this.state.modal);
  }

  render() {
    return (
      <div>
        {this.state.modal.isOpen && (
          <Modal
            onCloseModal={this.onCloseModal}
            visibleData={this.state.modal.visibleData}
          />
        )}
        <BookForm title="BooksForm" onAddBook={this.onAddBook} />
        <BookList
          onOpenModal={this.onOpenModal}
          onRemoveBook={this.onRemoveBook}
          books={this.state.books}
        />
      </div>
    );
  }
}
