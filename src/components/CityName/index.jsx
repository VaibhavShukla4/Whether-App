/** @format */

import React from 'react';
import './index.css';
import Map from './../../assets/svg/map.svg';
import Raining from './../../assets/svg/heavy-rain.svg';
import Unit from '../Unit';
const CityName = () => {
  return (
    <div className="w-full">
      <div className="flex-container-card">
        <div className="current-city">
          <img src={Map} alt="" />
          <span>Dhaka, Bangladesh</span>
        </div>
        <Unit />
      </div>
      <div className="flex-container-card">
        <div className="date">
          <span className="day">Sunday</span>
          <span className="date">04 Aug,2024</span>
        </div>
        <div className="date">
          <span className="day">28°C</span>
          <span className="date">High: 27 Low: 10</span>
        </div>
        {/* <div className="date">
          <img src={Raining} alt="" />
          <span className="date">High: 27 Low: 10</span>
        </div> */}
      </div>
      <div className="flex-container-card">
        <div className="date">
          <img src={Raining} alt="" />
        </div>
        <div className="date">
          <span className="day">28°C</span>
          <span className="date">High: 27 Low: 10</span>
        </div>
      </div>
    </div>
  );
};

export default CityName;
