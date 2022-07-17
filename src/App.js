import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import Form from './components/Form';
import Section from './components/Section';
import Contacts from './components/Contacts';
import Filter from './components/Filter';

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
      return prevState.contacts.find(cont => cont.name === contact.name)
        ? alert(`${contact.name} is already in the contacts list.`)
        : {
            ...prevState,
            contacts: [...prevState.contacts, contact],
            name: '',
            number: '',
          };
    });
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
    const visibleContacts = this.showContacts();
    return (
      <>
        <Section
          title="Phonebook"
          children={
            <Form
              inputChange={this.inputHandler}
              addContact={this.submitHandler}
              inputNameValue={this.state.name}
              inputNumberValue={this.state.number}
            />
          }
        />
        <Section
          title="Contacts"
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
