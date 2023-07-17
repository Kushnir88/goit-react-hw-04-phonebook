import React, { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';
import ContactForm from '../contact-form/ContactForm';
import ContactList from '../contact-list/ContactList';
import Filter from '../filter/Filter';
import styles from './App.module.css';

const App = () => {
  const [contacts, setContacts] = useState([]);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    const savedContacts = localStorage.getItem('contacts');
    if (savedContacts) {
      setContacts(JSON.parse(savedContacts));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const handleAddContact = (name, number) => {
    const isDuplicate = contacts.some((contact) => contact.name === name);

    if (isDuplicate) {
      alert('Contact with the same name already exists!');
    } else {
      const newContact = {
        id: nanoid(),
        name,
        number,
      };
      setContacts((prevContacts) => [...prevContacts, newContact]);
    }
  };

  const handleRemoveContact = (contactId) => {
    setContacts((prevContacts) =>
      prevContacts.filter((contact) => contact.id !== contactId)
    );
  };

  const handleFilterChange = (e) => {
    setFilter(e.target.value);
  };

  const filteredContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div className={styles.app}>
      <h1 className={styles.title}>Phonebook</h1>
      <ContactForm contacts={contacts} addContact={handleAddContact} />
      <h2 className={styles.subtitle}>Contacts</h2>
      <Filter filter={filter} onFilterChange={handleFilterChange} />
      <ContactList
        contacts={filteredContacts}
        onRemoveContact={handleRemoveContact}
      />
    </div>
  );
};

export default App;
