import { useDispatch, useSelector } from 'react-redux';
// import { chagneFilter, getFilter } from '../../redux/contacts/slice';
import { chaigeFilter } from 'redux/contacts/contacts-slice';
import { contactsSelectors } from 'redux/contacts';

import { FilterStyled } from './Filter.styled';

export const Filter = () => {
  const dispatch = useDispatch();
  const valueFilter = useSelector(contactsSelectors.getFilter);

  return (
    <FilterStyled>
      <label htmlFor="filter">Find contacts by name</label>
      <input
        name="filter"
        type="text"
        value={valueFilter}
        onChange={e => dispatch(chaigeFilter(e.currentTarget.value))}
      />
    </FilterStyled>
  );
};