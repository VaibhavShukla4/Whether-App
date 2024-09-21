/** @format */

import React from 'react';
import './index.css';
import Wind from './../../assets/svg/wind.svg';
import Humidity from './../../assets/svg/humidity.svg';
import Sunrise from './../../assets/svg/sunrise.svg';
import UV from './../../assets/svg/uv.svg';
import Visibility from './../../assets/svg/eye.svg';
const Highlight = () => {
  return (
    <div className="highlight-card">
      <span className="title">Today’s Highlight</span>
      <div className="card-grid">
        <div className="card-col">
          <div className="d-flex">
            <img src={Wind} alt="" />
            <span className="name">Wind Status</span>
          </div>
          <span className="name">
            7.90 <span className="name">km/h</span>
          </span>
          <span className="name small-text">9:00 AM</span>
        </div>
        <div className="card-col">
          <div className="d-flex">
            <img src={Humidity} alt="" />
            <span className="name">Humidity</span>
          </div>
          <span className="name">
            85 <span className="name">%</span>
          </span>
          <span className="name small-text">Humidity is good</span>
        </div>
        <div className="card-row">
          <div className="d-flex items-center">
            <img src={Sunrise} alt="" />
            <div className="wind-status ">
              <span className="name">Sunrise </span>
              <span className="name">4:50 AM</span>
            </div>
          </div>
        </div>
        <div className="card-col">
          <div className="d-flex">
            <img src={UV} alt="" />
            <span className="name">UV Index</span>
          </div>
          <span className="name">
            4 <span className="name">UV</span>
          </span>
          <span className="name small-text">Moderate UV</span>
        </div>
        <div className="card-col">
          <div className="d-flex">
            <img src={Visibility} alt="" />
            <span className="name">Visibility</span>
          </div>
          <span className="name">
            5 <span className="name">km</span>
          </span>
          <span className="name small-text">9:00 AM</span>
        </div>
        <div className="card-row">
          <div className="d-flex items-center">
            <img src={Sunrise} alt="" />
            <div className="wind-status ">
              <span className="name">Sunset </span>
              <span className="name">6:45 PM</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Highlight;
