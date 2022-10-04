import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import Form from './components/Form';
import Section from './components/Section';
import Contacts from './components/Contacts';
import Filter from './components/Filter';
import { CSSTransition } from 'react-transition-group';
import './components/Alert.css';
import './components/Tittle.css';

import { alert, defaultModules } from '@pnotify/core';
import '@pnotify/core/dist/PNotify.css';
import * as PNotifyMobile from '@pnotify/mobile';
import '@pnotify/mobile/dist/PNotifyMobile.css';
import '@pnotify/core/dist/Material.css';
import { defaults } from '@pnotify/core';
import 'material-design-icons/iconfont/material-icons.css';
defaults.styling = 'material';
defaults.type = 'error';
defaults.delay = '3000';
defaultModules.set(PNotifyMobile, {});

export default class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
    name: '',
    number: '',
  };

  componentDidMount() {
    console.log('componentDidMount');
    const savedContacts = localStorage.getItem('contacts');
    if (savedContacts) {
      this.setState({ contacts: JSON.parse(savedContacts) });
    }
  }
  componentDidUpdate(prevProps, prevState) {
    console.log('componentDidUpdate');
    if (prevState.contacts !== this.state.contacts) {
      console.log('we need update LS');
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
  }

  inputHandler = e => {
    this.setState(prevState => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  submitHandler = e => {
    e.preventDefault();

    const contact = {
      id: nanoid(),
      name: this.state.name,
      number: this.state.number,
    };

    this.setState(prevState => {
      const ifNameAlreadyExist = prevState.contacts.find(
        cont => cont.name === contact.name
      );
      if (ifNameAlreadyExist) {
        return alert({
          text: `${contact.name} is already in the contacts list.`,
        });
      }

      return {
        ...prevState,
        contacts: [...prevState.contacts, contact],
        name: '',
        number: '',
      };
      return prevState.contacts.find(cont => cont.name === contact.name)
        ? alert({ text: `${contact.name} is already in the contacts list.` })
        : {
            ...prevState,
            contacts: [...prevState.contacts, contact],
            name: '',
            number: '',
          };
    });
    console.log('added new contact in state', this.state.contacts);
  };

  searchContactHandler = e => {
    this.setState({ filter: e.target.value });
  };

  showContacts = () => {
    const { filter, contacts } = this.state;
    return contacts.filter(contact => {
      return contact.name.toLowerCase().includes(filter.toLowerCase());
    });
  };

  deleteContactHandler = elementId => {
    return this.setState(prevState => ({
      ...prevState,
      contacts: prevState.contacts.filter(contact => contact.id !== elementId),
    }));
  };

  render() {
    console.log('added new contact in state-render', this.state.contacts);
    const visibleContacts = this.showContacts();
    return (
      <>
        <CSSTransition
          in={true}
          appear={true}
          timeout={250}
          classNames="LogoTittle"
          unmountOnExit
        >
          <h2 className="logoTittle">Phonebook</h2>
        </CSSTransition>
        <Section
          children={
            // <CSSTransition
            //   in={true}
            //   appear={true}
            //   timeout={250}
            //   classNames="Alert"
            //   unmountOnExit
            // >
            <Form
              inputChange={this.inputHandler}
              addContact={this.submitHandler}
              inputNameValue={this.state.name}
              inputNumberValue={this.state.number}
            />
            // </CSSTransition>
          }
        />
        <Section
          children={
            <>
              {this.state.contacts.length > 1 && (
                <Filter searchContact={this.searchContactHandler} />
              )}
              <Contacts
                contacts={visibleContacts}
                deleteContact={this.deleteContactHandler}
              />
            </>
          }
        />
      </>
    );
  }
}
