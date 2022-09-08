import styled from 'styled-components';

export const UserMenuStyled = styled.div`
  display: flex;
  align-items: center;
  img {
    margin-right: 10px;
  }
  p {
    margin-right: 10px;
    font-size: 25px;
  }
  button {
    display: inline-block;
    font-size: 20px;
    border-radius: 5px;
    background-color: transparent;
    cursor: pointer;
    padding: 5px;
    :hover,
    :focus {
      background-color: orange;
    }
  }
`;