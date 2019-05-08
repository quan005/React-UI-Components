import React from 'react';
import './Header.css';

const HeaderTitle = props => {
  return (
    <div className="title-container">
      <h4>{props.title || "Lambda School"}</h4>
      <span>{props.subtitle || "@Lambda School"}</span>
      <span>{props.date || "26 Jan"}</span>
    </div>
  );
};

export default HeaderTitle;
