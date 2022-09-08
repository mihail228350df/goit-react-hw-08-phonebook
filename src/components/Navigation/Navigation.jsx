import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { authSelectors } from 'redux/auth';
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

export default function Navigation() {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  return (
    <nav>
      {isLoggedIn ? (
        <StyledLink to="/contacts">Contacts</StyledLink>
      ) : (
        <StyledLink to="/">Home</StyledLink>
      )}
    </nav>
  );
}