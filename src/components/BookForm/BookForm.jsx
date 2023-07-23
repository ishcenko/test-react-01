import React, { Component } from 'react'; // Імпортуємо компонент React
import { StyledForm } from './styled'; // Імпортуємо компонент StyledForm

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
    this.setState({
      [event.target.name]: event.target.name,
    });
  };

  render() {
    return (
      <StyledForm>
        <h2>BookForm</h2>
        <label className="form-label">
          <span>title:</span>
          <input
            onChange={this.handleInputChange}
            value={this.state.title}
            name="title"
            type="text"
          />
        </label>
        <label className="form-label">
          <span>author:</span>
          <input
            onChange={this.handleInputChange}
            value={this.state.author}
            name="author"
            type="text"
          />
        </label>
        <label className="form-label">
          <span>year:</span>
          <input
            onChange={this.handleInputChange}
            value={this.state.year}
            name="year"
            type="number"
          />
        </label>
        <label className="form-label">
          <span>genre:</span>
          <input
            onChange={this.handleInputChange}
            value={this.state.genre}
            name="genre"
            type="text"
          />
        </label>
        <label className="form-label">
          <span>favourite:</span>
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
