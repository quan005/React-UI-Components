import React from 'react';
import './Display.css';

const CalculatorDisplay = ({updateDisplay}) => {
  return (
    <div id="display">{updateDisplay || "0"}</div>
  );
};

export default CalculatorDisplay;
