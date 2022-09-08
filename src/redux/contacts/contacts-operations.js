import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com/';

const getContacts = createAsyncThunk('contacts/getContacts', async () => {
  try {
    const { data } = await axios.get('/contacts');
    return data;
  } catch (error) {
    console.log(error);
  }
});

const addContact = createAsyncThunk(
  'contacts/addContact',
  async ({ name, number }) => {
    try {
      const response = await axios.post('/contacts', {
        name,
        number,
      });
      return response.data;
    } catch (error) {
      console.log(error);
    }
  }
);

const delContact = createAsyncThunk('contacts/delContact', async id => {
  try {
    await axios.delete(`/contacts/${id}`);
    return id;
  } catch (error) {
    console.log(error);
  }
});

const contactsOperations = {
  getContacts,
  addContact,
  delContact,
};

export default contactsOperations;