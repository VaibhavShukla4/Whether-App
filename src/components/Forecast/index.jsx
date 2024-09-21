/** @format */

import React from 'react';
import './index.css';
import Raining from './../../assets/svg/heavy-rain.svg';
const Forecast = () => {
  return (
    <div className="highlight-card card-height overflow-auto">
      <span className="title">10 Day Forecast</span>
      <div className="forecast">
        <div className="forecast-slider">
          <span class="name">Today</span>
          <div class="light-break"></div>
          <img src={Raining} alt="" />
          <span class="day">28°C</span>
        </div>
        <div className="forecast-slider">
          <span class="name">Today</span>
          <div class="light-break"></div>
          <img src={Raining} alt="" />
          <span class="day">28°C</span>
        </div>
        <div className="forecast-slider">
          <span class="name">Today</span>
          <div class="light-break"></div>
          <img src={Raining} alt="" />
          <span class="day">28°C</span>
        </div>
        <div className="forecast-slider">
          <span class="name">Today</span>
          <div class="light-break"></div>
          <img src={Raining} alt="" />
          <span class="day">28°C</span>
        </div>
        <div className="forecast-slider">
          <span class="name">Today</span>
          <div class="light-break"></div>
          <img src={Raining} alt="" />
          <span class="day">28°C</span>
        </div>
        <div className="forecast-slider">
          <span class="name">Today</span>
          <div class="light-break"></div>
          <img src={Raining} alt="" />
          <span class="day">28°C</span>
        </div>
      </div>
    </div>
  );
};

export default Forecast;
