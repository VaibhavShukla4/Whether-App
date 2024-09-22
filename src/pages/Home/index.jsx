/** @format */

import React from 'react';
import './index.css';
import CityName from '../../components/CityName';
import Highlight from '../../components/Highlight';
import Countries from '../../components/Countries';
import Forecast from '../../components/Forecast';

const Home = ({ weatherData, loading }) => {
  return (
    <div className="grid-container">
      <div className="item1">
        <CityName weatherData={weatherData} loading={loading} />
      </div>
      <div className="item2">
        <Highlight weatherData={weatherData} loading={loading} />
      </div>
      <div className="item3">
        <Countries />
      </div>
      <div className="item4">
        <Forecast />
      </div>
    </div>
  );
};

export default React.memo(Home);
