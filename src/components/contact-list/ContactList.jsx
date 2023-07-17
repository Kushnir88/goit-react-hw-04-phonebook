import React from 'react';
import PropTypes from 'prop-types';
import ContactItem from '../contact-item/ContactItem';
import styles from './ContactList.module.css';

const ContactList = ({ contacts, onRemoveContact }) => {
  return (
    <ul className={styles.list}>
      {contacts.map((contact) => (
        <ContactItem
          key={contact.id}
          contact={contact}
          onRemoveContact={onRemoveContact}
        />
      ))}
    </ul>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ).isRequired,
  onRemoveContact: PropTypes.func.isRequired,
};

export default ContactList;
