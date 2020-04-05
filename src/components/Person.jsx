import React from 'react';
import './Person.css';

function Person(props) {
  return (
    <div className="Person">
      <h1>Bonjour, {props.name}</h1>
    </div>
  );
}

export default Person;
