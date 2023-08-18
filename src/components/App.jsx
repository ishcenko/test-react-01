import React from 'react';
// import BookForm from './BookForm/BookForm';
import Modal from './Modal/Modal';
// import { styled } from './BookingForm/styled'; // Правильний шлях до BookingForm
// import booksData from '../books.json'; // Правильний шлях до books.json
// import BookList from './BookList/BookList';
import { fetchPost } from 'servises/api';
import { MutatingDots } from 'react-loader-spinner';
import { ToastContainer, toast } from 'react-toastify';

// const books = booksData.books;

const toastConfig = {
  position: 'top-right',
  autoClose: 5000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
  theme: 'dark',
};
export class App extends React.Component {
  state = {
    // books: books,
    modal: {
      isOpen: false,
      visibleData: null,
    },
    posts: [],
    isLoading: false,
    error: null,
  };

  // onRemoveBook = bookId => {
  //   // console.log(bookId);
  //   this.setState({
  //     books: this.state.books.filter(book => book.id !== bookId),
  //   });
  // };

  // onAddBook = bookData => {
  //   console.log(bookData);
  //   const finalBook = {
  //     ...bookData,
  //     id: (Math.random() * 10).toString(),
  //   };
  //   this.setState({
  //     books: [finalBook, ...this.state.books],
  //   });
  // };

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

  async componentDidMount() {
    try {
      this.setState({ isLoading: true });
      const posts = await fetchPost();
      // console.log(posts);
      this.setState({ posts });
      toast.success('Your posts were successfuli fetched!', toastConfig);
    } catch (error) {
      this.setState({ error: error.message });
      toast.error(error.message, toastConfig);
    } finally {
      this.setState({ isLoading: false });
    }
    // console.log('Mount');

    // const stringifiedBooks = localStorage.getItem('books');
    // const books = JSON.parse(stringifiedBooks) ?? [];
    // this.setState({ books });
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.modal.isOpen !== this.state.isOpen) {
      console.log('Відкрив або закрив модалку');
    }

    // if (prevState.books.length !== this.state.books.length) {
    //   const stringifiedBooks = JSON.stringify(this.state.books);
    //   localStorage.setItem('books', stringifiedBooks);
    // }

    console.log(prevState.modal);
    console.log(this.state.modal);
  }

  render() {
    return (
      <div>
        <h1>Books 📚</h1>
        {this.state.modal.isOpen && (
          <Modal
            onCloseModal={this.onCloseModal}
            visibleData={this.state.modal.visibleData}
          />
        )}
        {this.state.error !== null && (
          <p className="c-error"> Oops {this.state.error}</p>
        )}
        {this.state.isLoading && (
          <MutatingDots
            height="100"
            width="100"
            color="#f4e806"
            secondaryColor="#0345f9"
            radius="12.5"
            ariaLabel="mutating-dots-loading"
            wrapperStyle={{}}
            wrapperClass=""
            visible={true}
          />
        )}
        {this.state.posts.length > 0 &&
          this.state.posts.map(posts => {
            return (
              <div key={posts.id}>
                <strong>Id: {posts.id}</strong>
                <h4>{posts.title}</h4>
                <p>{posts.body}</p>
              </div>
            );
          })}

        {/* <BookForm title="BooksForm" onAddBook={this.onAddBook} /> */}
        {/* <BookList
          onOpenModal={this.onOpenModal}
          onRemoveBook={this.onRemoveBook}
          books={this.state.books}
        /> */}
        {/* <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="dark"
        /> */}
      </div>
    );
  }
}
