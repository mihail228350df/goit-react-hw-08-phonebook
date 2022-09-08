import { useDispatch } from 'react-redux';
import { authOperations } from 'redux/auth';
import { useAuth } from 'hooks';
import { UserMenuStyled } from './UserMenu.styled';

export default function UserMenu() {
  const dispatch = useDispatch();
  const { user } = useAuth();

  return (
    <UserMenuStyled>
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8jI5nNj_3Wocu5DpUuozDKmzb9zYcrq-gbZr3GqWFsI1x5wJ28cYhKaj-d7l6fqRfFng&usqp=CAU"
        alt="userPhoto"
        width="40px"
      />
      <p>{user.name}</p>
      <button
        type="button"
        onClick={() => {
          dispatch(authOperations.logOut());
        }}
      >
        Logout
      </button>
    </UserMenuStyled>
  );
}