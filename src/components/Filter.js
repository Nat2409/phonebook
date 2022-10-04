import React from 'react';
import { CSSTransition } from 'react-transition-group';
import './Filter.css';
export default function Filter({ searchContact }) {
  return (
    // <CSSTransition
    //   in={true}
    //   appear={true}
    //   timeout={3000}
    //   classNames="Filter"
    //   unmountOnExit
    // >
    <div className="Filter">
      <label>
        Find contact by name <br />
        <input className="Filter-input" type="text" onChange={searchContact} />
      </label>
    </div>
    // </CSSTransition>
  );
}
