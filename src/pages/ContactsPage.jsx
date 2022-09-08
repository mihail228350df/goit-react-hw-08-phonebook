import { Box, StyledTitle } from '../components/StyledComponent';
import { ContactsList } from '../components/ContactsList/ContactsList';
import { Filter } from '../components/Filter/Filter';
import { MyForm } from '../components/Form/MyForm';

export default function ContactsPage() {
  return (
    <Box as="main" p={4}>
      <StyledTitle>Contacts</StyledTitle>

      <MyForm />

      <Filter />
      <ContactsList />
    </Box>
  );
}