/** @format */

import React from 'react';

const ForecastCard = ({ forecastData }) => {
  const todayDate = new Date();
  todayDate.setHours(0, 0, 0, 0);
  return (
    <div className="forecast">
      {Object.keys(forecastData).map((day) => {
        console.log('first', day);
        const todayForecast = forecastData[day][0]; // First forecast entry for the day (e.g., "Today")

        // Convert the forecast date to a Date object
        const forecastDate = new Date(todayForecast.dt_txt);
        forecastDate.setHours(0, 0, 0, 0); // Reset the time to midnight for comparison

        // Check if the forecast date is today
        const isToday = todayDate.getTime() === forecastDate.getTime();

        // Get the day of the week (e.g., Sunday, Monday) if it's not today
        const dayOfWeek = forecastDate.toLocaleDateString('en-US', {
          weekday: 'long',
        });
        return (
          <div key={day} className="forecast-slider">
            {/* Display "Today" in the layout you provided */}
            <div className="today-forecast">
              <span className="name">{isToday ? 'Today' : dayOfWeek}</span>
              <div className="light-break"></div>
              <img
                src={`http://openweathermap.org/img/wn/${todayForecast.weather[0].icon}@2x.png`}
                alt={todayForecast.weather[0].description}
              />
              <span className="day">
                {Math.round(todayForecast.main.temp)}°C
              </span>
            </div>

            {/* Display remaining forecast entries for the day */}
            {/* <div className="forecast-details">
              {forecastData[day].map((forecast, index) => {
                if (index === 0) return null;
                return (
                  <div key={forecast.dt} className="forecast-entry">
                    <img
                      src={`http://openweathermap.org/img/wn/${forecast.weather[0].icon}@2x.png`}
                      alt={forecast.weather[0].description}
                    />
                    <span className="day">
                      {Math.round(forecast.main.temp)}°C
                    </span>
                    <p>
                      {new Date(forecast.dt_txt).toLocaleTimeString([], {
                        hour: '2-digit',
                        minute: '2-digit',
                      })}
                    </p>
                  </div>
                );
              })}
            </div> */}
          </div>
        );
      })}
    </div>
  );
};

export default ForecastCard;
