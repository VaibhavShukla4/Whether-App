/** @format */

import React, { useState, useEffect } from 'react';
import './index.css'; // Create a separate CSS file for header styles
import Search from './../../assets/svg/search.svg';
const Header = ({ isOpen, showSidebar }) => {
  const handleToggleSidebar = () => {};
  return (
    <header id={`${isOpen ? 'page-topbar' : 'page-topbar-hide'} `}>
      <div className="navbar-header">
        <div className="input-box">
          <img src={Search} alt="" />
          <input type="text" placeholder="Search Your location" />
        </div>
        <div className="d-flex header-right">
          <span>{/* <img src={Notifi} className="notification" /> */}</span>
        </div>
      </div>
    </header>
  );
};

export default Header;
