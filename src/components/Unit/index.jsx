/** @format */

import React, { useState } from 'react';
import './index.css';

function Unit() {
  const [checked, setChecked] = useState(false);

  const handleCheckboxChange = () => {
    setChecked(!checked);
  };

  return (
    <div className="toggle-button-cover">
      <div className="button r" id="button-3">
        <input
          type="checkbox"
          className="checkbox"
          checked={checked}
          onChange={handleCheckboxChange}
        />
        <div className="knobs"></div>
        <div className="layer"></div>
      </div>
    </div>
  );
}

export default Unit;
