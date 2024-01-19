import { useState } from 'react';
import { nanoid } from 'nanoid';
import { addContact } from '../../redux/contacts/contactsSlice';
import { useDispatch, useSelector } from 'react-redux';

import css from './Form.module.css';



export const FormAddContacts = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const dispatch = useDispatch();
  const contacts = useSelector(store => store.contactsFactory.contacts)

  const handleAddContact = (contact, formReset) => {
    const newContact = {
      id: nanoid(),
      name: contact.name,
      number: contact.number,
    };
  
    const isContact = (contacts || []).some(
      obj =>
        obj.name.trim().toLowerCase() === newContact.name.trim().toLowerCase()
    );
  
    if (isContact) {
      alert(`${newContact.name} is already in contacts!`);
      formReset();
      return;
    }
    // setContacts(prevState => [...prevState, newContact]);
    const action = addContact(newContact);
    dispatch(action)
    formReset();
  };

  const handleChange = event => {
    const { name, value } = event.target;

    if (name === 'name') {
      setName(value);
    } else if (name === 'number') {
      setNumber(value);
    }
  };

  const handleSubmit = event => {
    event.preventDefault();
    handleAddContact(
      {
        name,
        number,
      },
      reset
    );
  };

  const reset = () => {
    setName('');
    setNumber('');
  };

  return (
    <form className={css.addForm} onSubmit={event => handleSubmit(event)}>
      <div className={css.inputForm}>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          name="name"
          id="name"
          className={css.input}
          onChange={event => handleChange(event)}
          value={name}
          required
        />
      </div>
      <div className={css.inputForm}>
        <label htmlFor="number">Number:</label>
        <input
          type="tel"
          name="number"
          id="number"
          className={css.input}
          value={number}
          onChange={event => handleChange(event)}
          required
        />
      </div>
      <button className={css.addBtn} type="submit">
        Add contact
      </button>
    </form>
  );
};
