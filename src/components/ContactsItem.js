import React from 'react';

const ContactsItem = ({ name, id, number }) => {
  return (
    <li className="Contacts-item" key={id}>
      <span className="Contacts-name"> {name}</span> {number}
      <button
        className="Contacts-button"
        type="button"
        // onClick={() => deleteContact(id)}
      ></button>
    </li>
  );
};
export default ContactsItem;
