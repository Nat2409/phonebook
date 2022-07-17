import React from 'react';

export default function Form({
  inputChange,
  addContact,
  inputNameValue,
  inputNumberValue,
}) {
  return (
    <form>
      <label>
        Name
        <input
          onChange={inputChange}
          type="text"
          name="name"
          value={inputNameValue}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </label>
      <label>
        Number
        <input
          onChange={inputChange}
          type="tel"
          name="number"
          value={inputNumberValue}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </label>
      <button type="submit" onClick={addContact}>
        Add contact
      </button>
    </form>
  );
}
