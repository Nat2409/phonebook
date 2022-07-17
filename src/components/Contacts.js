import React from 'react';

export default function Contacts({ contacts, deleteContact }) {
  // console.log('contacts', contacts);
  return (
    <ul>
      {contacts.map(({ name, id, number }) => (
        <li key={id}>
          {name}: {number} &emsp;
          <button type="button" onClick={() => deleteContact(id)}>
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
}
