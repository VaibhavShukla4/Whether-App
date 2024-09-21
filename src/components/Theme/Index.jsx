/** @format */

import React, { useState } from 'react';
import './index.css'; // Assuming you move the CSS to a separate file

const Theme = ({ handleToggle, isChecked }) => {
  return (
    <label htmlFor="switch" className="switch">
      <input
        id="switch"
        type="checkbox"
        checked={isChecked}
        onChange={handleToggle}
      />
      <span className="slider"></span>
      <span className="decoration"></span>
    </label>
  );
};

export default Theme;
