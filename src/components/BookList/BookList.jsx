import React from 'react';
import PropTypes from 'prop-types';

function BookList({ books, onRemoveBook }) {
  return (
    <div>
      <ul>
        {books.map(book => (
          <li key={book.id}>
            <button onClick={() => onRemoveBook(book.id)}>&times;</button>
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
BookList.propTypes = {
  onRemoveBook: PropTypes.func.isRequired,
  books: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      author: PropTypes.string.isRequired,
      year: PropTypes.number.isRequired,
      genre: PropTypes.string.isRequired,
      favourite: PropTypes.bool.isRequired,
    })
  ).isRequired,
};
export default BookList;
