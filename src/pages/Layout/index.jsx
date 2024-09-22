/** @format */

import { useEffect, useState } from 'react';
import Header from '../../components/Header';
import Sidebar from '../../components/SideBar';
import './index.css';
import { Outlet } from 'react-router-dom';
import { fetchWeather } from './../../services/weatherService';

const Layout = ({ onCitySelect, weatherData }) => {
  const [isOpen, setisOpen] = useState(false);
  const [showSidebar, setShowSidebar] = useState(false);
  const [isChecked, setIsChecked] = useState(false);

  return (
    <div className={`screen ${isChecked ? 'bg-light' : 'bg-dark'}`}>
      <Sidebar
        showSidebar={showSidebar}
        setShowSidebar={setShowSidebar}
        isOpen={isOpen}
        setisOpen={setisOpen}
        isChecked={isChecked}
        setIsChecked={setIsChecked}
      />
      <div
        className={`${isOpen ? 'main-content' : 'main-content-hide'} ${
          showSidebar ? 'small-main-content' : 'small-main-content-hide'
        }`}
      >
        <Header
          weatherData={weatherData}
          onCitySelect={onCitySelect}
          setShowSidebar={setShowSidebar}
          isOpen={isOpen}
        />
        <div className={`page-content ${isChecked ? 'bg-light' : 'bg-dark'}`}>
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Layout;
