import React from 'react';
import './Card.css';

const CardContent = props => {
  return (
    <div className="card-content-container">
      <h5>{props.title || "Get started with React"}</h5>
      <p>{props.paragraph || "React makes it painless to create interactive UI's. Design simple views for each state in your application."}</p>
      <span>{props.url || "reactjs.org"}</span>
    </div>
  );
};

export default CardContent;
