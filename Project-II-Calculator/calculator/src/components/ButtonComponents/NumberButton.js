import React from 'react';
import './Button.css';

const NumberButton = ({buttonStyle, updateDisplay, text}) => {
  return (
    <button className={buttonStyle} onClick={updateDisplay}>{text}</button>
  );
};

export default NumberButton;
