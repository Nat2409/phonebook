import React from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import './Contacts.css';
// import ContactsItem from './ContactsItem';

export default function Contacts({ contacts, deleteContact }) {
  // console.log('contacts', contacts);
  return (
    <TransitionGroup component="ul" className="Contacts">
      {contacts.map(({ name, id, number }) => (
        <CSSTransition key={id} timeout={250} classNames="Contacts-item">
          {/* <ContactsItem name={name} id={id} number={number} /> */}
          <li className="Contacts-item" key={id}>
            <span className="Contacts-name"> {name}</span> {number}
            <button
              className="Contacts-button"
              type="button"
              onClick={() => deleteContact(id)}
            ></button>
          </li>
        </CSSTransition>
      ))}
    </TransitionGroup>
  );
}
