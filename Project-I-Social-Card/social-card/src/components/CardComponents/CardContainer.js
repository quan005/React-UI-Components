import React from 'react';
import './Card.css';
import CardContent from "./CardContent.js";
import CardBanner from "./CardBanner.js";

const CardContainer = props => {
  function handleClick(e) {
    e.preventDefault();
    window.open("https://www.reactjs.org");
  }

  return (
    <div className="card-container" onClick={handleClick}>
      <CardBanner />
      <CardContent />
    </div>
  );
};

export default CardContainer;
