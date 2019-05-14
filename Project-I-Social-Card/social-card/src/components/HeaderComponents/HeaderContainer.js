import React from 'react';
import './Header.css';
import ImageThumbnail from "./ImageThumbnail.js";
import HeaderTitle from "./HeaderTitle.js";
import HeaderContent from "./HeaderContent.js";

const HeaderContainer = props => {
  return (
    <div className="header-container">
      <ImageThumbnail />
      <div className="content-container">
        <HeaderTitle />
        <HeaderContent />
      </div>
    </div>
  );
};

export default HeaderContainer;
