/** @format */

import React from 'react';
import './index.css';
import RainyLight from './../../assets/svg/rainyday-light.svg';
import CloudyNight from './../../assets/svg/cloudy-night.svg';
import DropLight from './../../assets/svg/drop-light.svg';
import FullMoon from './../../assets/svg/full-moon.svg';
import HalfMoon from './../../assets/svg/half-moon.svg';
import HeavyRain from './../../assets/svg/heavy-rain.svg';
import MostcloudyNight from './../../assets/svg/mostcloudy-night.svg';
import ThunderLight from './../../assets/svg/thunder-light.svg';
import ThunderstormLight from './../../assets/svg/thunderstorm-light.svg';
import { useNavigate } from 'react-router-dom';
const LandingPage = () => {
  const navigate = useNavigate();
  return (
    <div className="landing-container">
      <div className="flex-container">
        <div className="forecast-card">
          <span id="number">24 Hours</span>
          <span className="bold">Real-Time Weather Forecast</span>
          <span className="text">7-Day Forecast</span>
          <p>Your daily weather updates in one sleek interface</p>
          <span className="bold">1.2 k Downloads</span>
          <button className="land-btn" onClick={() => navigate('/home')}>
            Check Whether
          </button>
        </div>
        <div className="forecast-img">
          <img src={RainyLight} alt="" />
          <img src={MostcloudyNight} alt="" />
          <img src={FullMoon} alt="" />
          <img src={HalfMoon} alt="" />
          <img src={CloudyNight} alt="" />
          <img src={ThunderLight} alt="" />
          <img src={HeavyRain} alt="" />
          <img src={DropLight} alt="" />
          <img src={ThunderstormLight} alt="" />
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
