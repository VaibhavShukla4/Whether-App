/** @format */

import React from 'react';
import './index.css';
import Wind from './../../assets/svg/wind.svg';
import Humidity from './../../assets/svg/humidity.svg';
import Sunrise from './../../assets/svg/sunrise.svg';
import UV from './../../assets/svg/uv.svg';
import Visibility from './../../assets/svg/eye.svg';
import Sun from './../../assets/svg/sun.svg';
const Countries = () => {
  return (
    <div className="highlight-card card-height overflow-auto">
      <span className="title">Others Countries</span>
      <div className="countries-card">
        <div className="state">
          <span class="name small-text">Australia</span>
          <span class="name">Canberra</span>
          <span class="name small-text">Sunny</span>
        </div>
        <img className="condition" src={Sun} alt="" />
        <span class="name">
          32° <span class="name">24°</span>
        </span>
      </div>
      <div className="countries-card">
        <div className="state">
          <span class="name small-text">Australia</span>
          <span class="name">Canberra</span>
          <span class="name small-text">Sunny</span>
        </div>
        <img className="condition" src={Sun} alt="" />
        <span class="name">
          32° <span class="name">24°</span>
        </span>
      </div>
      <div className="countries-card">
        <div className="state">
          <span class="name small-text">Australia</span>
          <span class="name">Canberra</span>
          <span class="name small-text">Sunny</span>
        </div>
        <img className="condition" src={Sun} alt="" />
        <span class="name">
          32° <span class="name">24°</span>
        </span>
      </div>
    </div>
  );
};

export default Countries;
