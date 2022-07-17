import React from 'react';

export default function Filter({ searchContact }) {
  return (
    <label>
      Find contact by name
      <input type="text" onChange={searchContact} />
    </label>
  );
}
