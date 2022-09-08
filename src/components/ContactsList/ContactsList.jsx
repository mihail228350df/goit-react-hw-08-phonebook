import { ContactsStyledList } from './ContactsList.styled';

import { useSelector, useDispatch } from 'react-redux';

import { contactsOperations, contactsSelectors } from 'redux/contacts';
import { useEffect } from 'react';

export const ContactsList = () => {
  const dispatch = useDispatch();
  const contactsArray = useSelector(contactsSelectors.getContactsArray);
  const filter = useSelector(contactsSelectors.getFilter);

  useEffect(() => {
    dispatch(contactsOperations.getContacts());
  }, [dispatch]);

  const getVisibleContacts = () => {
    const normalizedFilter = filter.toLowerCase();
    const visibleContacts = contactsArray.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );

    return visibleContacts;
  };

  const contactsItems = getVisibleContacts().map(({ name, id, number }) => {
    return (
      <li key={id} id={id} name={name}>
        {name}: {number}
        <button
          type="button"
          onClick={() => dispatch(contactsOperations.delContact(id))}
        >
          Delete
        </button>
      </li>
    );
  });

  return <ContactsStyledList>{contactsItems}</ContactsStyledList>;
};