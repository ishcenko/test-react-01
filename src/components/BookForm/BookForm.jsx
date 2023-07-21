import React, { Component } from 'react'; // Імпортуємо компонент React
import { StyledForm } from './styled'; // Імпортуємо компонент StyledForm

export default class BookForm extends Component {
  render() {
    return (
      <StyledForm>
        <h2>BookForm</h2>
        <label className="form-label">
          <span>title:</span>
          <input type="text" />
        </label>
        <label className="form-label">
          <span>author:</span>
          <input type="text" />
        </label>
        <label className="form-label">
          <span>year:</span>
          <input type="text" />
        </label>
        <label className="form-label">
          <span>genre:</span>
          <input type="text" />
        </label>
        <label className="form-label">
          <span>favourite:</span>
          <input type="checkbox" />
        </label>
        <button type="submit" className="form-btn">
          Add book
        </button>
      </StyledForm>
    );
  }
}
