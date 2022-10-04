import React from 'react';
import { CSSTransition } from 'react-transition-group';
import './filter.css';
export default function Filter({ searchContact }) {
  return (
    <CSSTransition
      in={true}
      appear={true}
      timeout={250}
      classNames="Filter"
      unmountOnExit
    >
      <div className="filter-box">
        <label>
          Find contact by name <br />
          <input
            className="filter-input"
            type="text"
            onChange={searchContact}
          />
        </label>
      </div>
    </CSSTransition>
  );
}
