import AuthNav from 'components/AuthNav/AuthNav';
import Navigation from 'components/Navigation/Navigation';
import UserMenu from 'components/UserMenu/UserMenu';
import { useSelector } from 'react-redux';
import { authSelectors } from 'redux/auth';
import { AppBarStyled } from './AppBar.styled';

export default function AppBar() {
  const isLoggetIn = useSelector(authSelectors.getIsLoggedIn);

  return (
    <AppBarStyled>
      <Navigation />

      {!isLoggetIn ? <AuthNav /> : <UserMenu />}
    </AppBarStyled>
  );
}