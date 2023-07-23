import styled from 'styled-components';

export const StyledForm = styled.form`
  border: 2px;
  display: flex;
  flex-direction: column;
  max-width: 350px;
  width: 50%;
  margin: 20px auto 25px;
  gap: 22px;

  .form-label {
    display: flex;
    gap: 15px;
  }
  .radio-group {
    display: flex;
    align-items: baseline;
    gap: 19px;
  }
  .subtitle {
    color: brown;
    font-size: 22px;
  }
  .form-btn {
    border: 1px solid darkcyan;
    background: #fff000;
    color: blue;
    font-size: 22px;
    padding: 15px;
    border-radius: 10px;
    cursor: pointer;
    &:hover {
      color: green;
      background: orangered;
    }
  }
`;
