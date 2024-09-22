/** @format */

import React, { useState, useEffect } from 'react';
import './index.css';
import Wind from './../../assets/svg/wind.svg';
import Humidity from './../../assets/svg/humidity.svg';
import Sunrise from './../../assets/svg/sunrise.svg';
import UV from './../../assets/svg/uv.svg';
import Visibility from './../../assets/svg/eye.svg';
import WeatherInfo from '../WeatherInfo';
import { convertUnixToTime } from '../../utils/convertUnixToTime';
import { fetchUVIndex } from './../../services/weatherService';
const Highlight = ({ weatherData }) => {
  const [uvIndex, setUvIndex] = useState(null);

  // Always declare hooks at the top of the component
  useEffect(() => {
    if (!weatherData || !weatherData.coord) return; // Avoid making the request if data is missing

    const lat = weatherData.coord.lat;
    const lon = weatherData.coord.lon;

    const getUVIndex = async () => {
      try {
        const uvValue = await fetchUVIndex(lat, lon); // Using the common function
        setUvIndex(uvValue);
      } catch (error) {
        console.error('Failed to fetch UV index:', error);
      }
    };

    getUVIndex();
  }, [weatherData]);

  // Return early only after hooks are declared
  if (!weatherData || !weatherData.sys || !weatherData.coord) {
    return <p>Loading weather data...</p>;
  }

  const { timezone, visibility, sys, name } = weatherData;
  const { sunrise, sunset } = sys;
  console.log(weatherData?.main?.humidity);
  return (
    <div className="highlight-card">
      <span className="title">Today’s Highlight</span>
      {/* <WeatherInfo weatherData={weatherData} /> */}
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
            {weatherData?.main?.humidity} <span className="name">%</span>
          </span>
          <span className="name small-text">Humidity is good</span>
        </div>
        <div className="card-row">
          <div className="d-flex items-center">
            <img src={Sunrise} alt="" />
            <div className="wind-status ">
              <span className="name">Sunrise </span>
              <span className="name">
                {convertUnixToTime(sunrise, timezone)}
              </span>
            </div>
          </div>
        </div>
        <div className="card-col">
          <div className="d-flex">
            <img src={UV} alt="" />
            <span className="name">UV Index</span>
          </div>
          <span className="name">
            {uvIndex !== null ? uvIndex : 'Loading...'}
            <span className="name">UV</span>
          </span>
          <span className="name small-text">Moderate UV</span>
        </div>
        <div className="card-col">
          <div className="d-flex">
            <img src={Visibility} alt="" />
            <span className="name">Visibility</span>
          </div>
          <span className="name">
            {visibility / 1000} <span className="name">km</span>
          </span>
          <span className="name small-text">9:00 AM</span>
        </div>
        <div className="card-row">
          <div className="d-flex items-center">
            <img src={Sunrise} alt="" />
            <div className="wind-status ">
              <span className="name">Sunset </span>
              <span className="name">
                {convertUnixToTime(sunset, timezone)}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default React.memo(Highlight);
