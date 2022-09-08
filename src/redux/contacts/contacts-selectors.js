const getContactsArray = state => state.contacts.items;

const getFilter = state => state.contacts.filter;

const contactsSelectors = {
  getContactsArray,
  getFilter,
};

export default contactsSelectors;