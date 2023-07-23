import React, { Component } from 'react'; // Імпортуємо компонент React
import { StyledForm } from './styled'; // Імпортуємо компонент StyledForm
import PropTypes from 'prop-types';
export default class BookForm extends Component {
  state = {
    title: '',
    author: '',
    year: '',
    genre: '',
    favourite: false,
    cover: 'https://images.gr-assets.com/books/1361975680l/2657.jpg',
  };

  handleInputChange = event => {
    console.log(event.target.name);
    if (event.target.type === 'checked') {
      this.setState({
        [event.target.name]: event.target.checked,
      });
      return;
    }
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    const bookData = {
      ...this.state,
      year: Number.parseInt(this.state.year),
      // title: this.state.title,
      // author: this.state.author,
      // genre: this.state.genre,
      // favourite: this.state.favourite,
      // cover: this.state.cover,
    };
    this.props.onAddBook(bookData);
    this.setState({
      title: '',
      author: '',
      year: '',
      genre: '',
      favourite: false,
      cover: 'https://images.gr-assets.com/books/1361975680l/2657.jpg',
    });
  };

  render() {
    return (
      <StyledForm onSubmit={this.handleSubmit}>
        <h2>{this.props.title}</h2>
        <label className="form-label">
          <span className="subtitle">title:</span>
          <input
            onChange={this.handleInputChange}
            value={this.state.title}
            name="title"
            type="text"
            required
          />
        </label>
        <label className="form-label">
          <span className="subtitle">author:</span>
          <input
            onChange={this.handleInputChange}
            value={this.state.author}
            name="author"
            type="text"
            required
          />
        </label>
        <label className="form-label">
          <span className="subtitle">year:</span>
          <input
            onChange={this.handleInputChange}
            value={this.state.year}
            name="year"
            type="text"
            required
          />
        </label>
        <label className="form-label">
          <span className="subtitle">genre:</span>
          <input
            onChange={this.handleInputChange}
            value={this.state.genre}
            name="genre"
            type="text"
            required
          />
        </label>
        <label className="form-label">
          <span className="subtitle">favourite:</span>
          <input
            onChange={this.handleInputChange}
            checked={this.state.favourite}
            name="favourite"
            type="checkbox"
          />
        </label>
        <button type="submit" className="form-btn">
          Add book
        </button>
      </StyledForm>
    );
  }
}

BookForm.propTypes = {
  title: PropTypes.string.isRequired,
  onAddBook: PropTypes.func.isRequired,
};
