/** @format */

import React from 'react';
import './index.css';
import CityName from '../../components/CityName';
import Weather from '../../components/Weather';
import Highlight from '../../components/Highlight';
import Countries from '../../components/Countries';
import Forecast from '../../components/Forecast';

const Home = () => {
  return (
    <div className="grid-container">
      <div className="item1">
        <CityName />
      </div>
      {/* <div className="item2"><Weather /></div> */}
      <div className="item2">
        <Highlight />
      </div>
      <div className="item3">
        <Countries />
      </div>
      <div className="item4">
        <Forecast />
      </div>
      {/* <div className="item4">Item 4</div>
      <div className="item5">Item 5</div>
      <div className="item6">Item 6</div> */}
    </div>
  );
};

export default Home;
