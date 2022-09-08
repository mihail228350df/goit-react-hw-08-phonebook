import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const StyledLink = styled(NavLink)`
  color: black;
  text-decoration: none;
  font-size: 25px;
  margin-right: 10px;
  &.active {
    color: orange;
  }
`;

export default function AuthNav() {
  return (
    <nav>
      <StyledLink to="/register">Register</StyledLink>
      <StyledLink to="/login">Login</StyledLink>
    </nav>
  );
}