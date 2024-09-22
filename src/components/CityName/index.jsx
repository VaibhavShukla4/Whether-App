/** @format */

import React, { useState } from 'react';
import './index.css';
import Map from './../../assets/svg/map.svg';
import Raining from './../../assets/svg/heavy-rain.svg';
import Unit from '../Unit';
import { convertUnixToLocalTime } from '../../utils/convertUnixToLocalTime';
import { celsiusToFahrenheit } from '../../utils/celsiusToFahrenheit ';
import CardSkeleton from '../CardSkeleton';

// Helper function to convert Celsius to Fahrenheit

const CityName = ({ weatherData, loading }) => {
  // State to track if the temperature is in Celsius or Fahrenheit
  const [isCelsius, setIsCelsius] = useState(false);

  // Function to toggle between Celsius and Fahrenheit
  const toggleTemperatureUnit = () => {
    setIsCelsius(!isCelsius);
  };

  // Rounding the temperature values to the nearest integer
  const tempMax = isCelsius
    ? Math.round(weatherData?.main?.temp_max)
    : celsiusToFahrenheit(weatherData?.main?.temp_max);
  const tempMin = isCelsius
    ? Math.round(weatherData?.main?.temp_min)
    : celsiusToFahrenheit(weatherData?.main?.temp_min);
  const feelsLike = isCelsius
    ? Math.round(weatherData?.main?.feels_like)
    : celsiusToFahrenheit(weatherData?.main?.feels_like);

  if (
    !weatherData ||
    !weatherData.weather ||
    weatherData.weather.length === 0
  ) {
    return <CardSkeleton />;
  }

  const { weather, name, dt, timezone } = weatherData;
  const weatherIcon = weather[0].icon;

  // Construct the URL for the weather icon
  const iconUrl = `http://openweathermap.org/img/wn/${weatherIcon}@2x.png`;

  // Convert dt (Unix timestamp) to local date and time
  const { day, formattedDate } = convertUnixToLocalTime(dt, timezone);

  return (
    <>
      {loading ? (
        <CardSkeleton />
      ) : (
        <div className="w-full">
          <div className="flex-container-card">
            <div className="current-city">
              <img src={Map} alt="" />
              <span>
                {weatherData?.name}, {weatherData?.sys?.country}
              </span>
            </div>
            <Unit
              isCelsius={isCelsius}
              toggleTemperatureUnit={toggleTemperatureUnit}
            />
          </div>
          <div className="flex-container-card">
            <div className="date">
              <span className="day">{day ? day : 'Sunday'}</span>
              <span className="date">{formattedDate}</span>
            </div>
            <div className="date">
              <span className="day">
                {feelsLike}°{isCelsius ? 'C' : 'F'}
              </span>
              <span className="date">
                High: {tempMax}°{isCelsius ? 'C' : 'F'} Low: {tempMin}°
                {isCelsius ? 'C' : 'F'}
              </span>
            </div>
          </div>
          <div className="flex-container-card">
            <div className="date">
              <img src={iconUrl ? iconUrl : Raining} alt="" />
            </div>
            <div className="date">
              <span
                className="day"
                style={{ fontSize: '20px', textTransform: 'capitalize' }}
              >
                {weatherData?.weather[0]?.description}
              </span>
              <span className="date">
                {' '}
                {feelsLike}°{isCelsius ? 'C' : 'F'}
              </span>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default CityName;
