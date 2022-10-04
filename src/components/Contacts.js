import React from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import './Contacts.css';

export default function Contacts({ contacts, deleteContact }) {
  // console.log('contacts', contacts);
  return (
    <TransitionGroup component="ul" className="Contacts">
      {contacts.map(({ name, id, number }) => (
        <CSSTransition key={id} timeout={250} classNames="Contacts-item">
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
