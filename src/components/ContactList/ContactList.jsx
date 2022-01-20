import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import contactsActions from '../../redux/contacts/contacts-actions';
import { getVisibleContacts } from '../../redux/contacts/contacts-selector';
import { List, Text, Button } from './ContactList.styled';

function ContactList() {
  const contacts = useSelector(getVisibleContacts);

  const dispatch = useDispatch();
  const onDeleteContact = id => dispatch(contactsActions.deleteContact(id));

  return (
    <>
      <Text>К-во контактов: {contacts.length}</Text>
      <List>
        {contacts.map(({ id, name, number }) => {
          return (
            <li key={id}>
              <Text>{name}</Text>
              <Text>{number}</Text>
              <Button onClick={() => onDeleteContact(id)}>Delete</Button>
            </li>
          );
        })}
      </List>
    </>
  );
}

ContactList.propTypes = {
  contacts: PropTypes.array,
  onDeleteContact: PropTypes.func,
};

export default ContactList;
