import React from 'react';
import './Button.css';

const ActionButton = ({updateDisplay, text}) => {
  return (
    <button className="large" onClick={updateDisplay}>{text}</button>
  );
};

export default ActionButton;
