/** @format */

import React, { useState } from 'react';
import './index.css';

function Unit({ isCelsius, toggleTemperatureUnit }) {
  const [checked, setChecked] = useState(isCelsius);

  const handleCheckboxChange = () => {
    setChecked(!checked);
    toggleTemperatureUnit();
  };

  return (
    <div className="toggle-button-cover">
      <div className="button r" id="button-3">
        <input
          type="checkbox"
          className="checkbox"
          checked={!checked}
          onChange={handleCheckboxChange}
        />
        <div className="knobs"></div>
        <div className="layer"></div>
      </div>
    </div>
  );
}

export default Unit;
