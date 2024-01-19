import { useDispatch, useSelector } from 'react-redux';
import { removeContact} from 'components/redux/contacts/contactsSlice';
import css from './Contacts.module.css';


export const ContactsList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(store => store.contactsFactory.contacts)
  const filter = useSelector(store => store.contactsFactory.filter)

  const handleDeleteContact = event => {
    const contactId = event.target.id;
    const action = removeContact(contactId);
    dispatch(action);
  };

  const filteredContacts = contacts.filter(({ name }) =>
      name.toLowerCase().includes(filter.trim().toLowerCase())
    );
  

  return (
    <ul className={css.contactsList}>
      {filteredContacts.map(({ id, name, number }) => (
        <li key={id} className={css.contactItem}>
          <div className={css.contact}>
            {name}: {number}
          </div>
          <button
            id={id}
            onClick={event => handleDeleteContact(event)}
            type="button"
            className={css.deleteBtn}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};
