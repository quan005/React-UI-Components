import React from 'react';
import './App.css';
import CalculatorDisplay from './components/DisplayComponents/CalculatorDisplay';
import ActionButton from './components/ButtonComponents/ActionButton';
import NumberButton from './components/ButtonComponents/NumberButton';

const App = ({updateDisplay}) => {
  return (
    <div className="app">
      <div className="row">
        <CalculatorDisplay />
      </div>

      <div className="row">
        <ActionButton
          text="clear"
          updateDisplay="{updateDisplay}"
        />
        <NumberButton
          buttonStyle="red-button"
          text="÷"
          updateDisplay="{updateDisplay}"
        />
      </div>

      <div className="row">
        <NumberButton
          buttonStyle="buttonStyle"
          text="7"
          updateDisplay="{updateDisplay}"
        />
        <NumberButton
          buttonStyle="buttonStyle"
          text="8"
          updateDisplay="{updateDisplay}"
        />
        <NumberButton
          buttonStyle="buttonStyle"
          text="9"
          updateDisplay="{updateDisplay}"
        />
        <NumberButton
          buttonStyle="red-button"
          text="x"
          updateDisplay="{updateDisplay}"
        />
      </div>

      <div className="row">
        <NumberButton
          buttonStyle="buttonStyle"
          text="4"
          updateDisplay="{updateDisplay}"
        />
        <NumberButton
          buttonStyle="buttonStyle"
          text="5"
          updateDisplay="{updateDisplay}"
        />
        <NumberButton
          buttonStyle="buttonStyle"
          text="6"
          updateDisplay="{updateDisplay}"
        />
        <NumberButton
          buttonStyle="red-button"
          text="-"
          updateDisplay="{updateDisplay}"
        />
      </div>

      <div className="row">
        <NumberButton
          buttonStyle="buttonStyle"
          text="1"
          updateDisplay="{updateDisplay}"
        />
        <NumberButton
          buttonStyle="buttonStyle"
          text="2"
          updateDisplay="{updateDisplay}"
        />
        <NumberButton
          buttonStyle="buttonStyle"
          text="3"
          updateDisplay="{updateDisplay}"
        />
        <NumberButton
          buttonStyle="red-button"
          text="+"
          updateDisplay="{updateDisplay}"
        />
      </div>

      <div className="row">
        <ActionButton
          text="0"
          updateDisplay="{updateDisplay}"
        />
        <NumberButton
          buttonStyle="red-button"
          text="="
          updateDisplay="{updateDisplay}"
        />
      </div>
    </div>
  );
};

export default App;
