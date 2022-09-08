import { createSlice } from '@reduxjs/toolkit';
import contactsOperations from './contacts-operations';

const initialState = {
  items: [],
  filter: '',
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    chaigeFilter(state, action) {
      state.filter = action.payload;
    },
  },
  extraReducers: {
    [contactsOperations.getContacts.fulfilled](state, action) {
      state.items = action.payload;
    },
    [contactsOperations.addContact.fulfilled](state, action) {
      state.items = [action.payload, ...state.items];
    },
    [contactsOperations.delContact.fulfilled](state, action) {
      state.items = state.items.filter(
        contact => contact.id !== action.payload
      );
    },
  },
});

export const { chaigeFilter } = contactsSlice.actions;
export default contactsSlice.reducer;