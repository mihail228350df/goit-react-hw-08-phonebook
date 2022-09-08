import { StyledList } from 'components/StyledComponent';
import styled from 'styled-components';

export const ContactsStyledList = styled(StyledList)`
  margin-left: auto;
  margin-right: auto;
  max-width: 600px;
  li {
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid black;
    margin: 0 auto 5px auto;
    padding: 5px;
    button {
      display: inline-block;
      border-radius: 5px;
      background-color: transparent;
      cursor: pointer;
      padding: 5px;
      :hover,
      :focus {
        background-color: orange;
      }
    }
  }
`;