/** @format */

import { useState } from 'react';
import Header from '../../components/Header';
import Sidebar from '../../components/SideBar';
import './index.css';
import { Outlet } from 'react-router-dom';

const Layout = ({ onCitySelect, weatherData }) => {
  const [isOpen, setisOpen] = useState(false);
  const [showSidebar, setShowSidebar] = useState(false);
  const [isChecked, setIsChecked] = useState(false);
  const handleToggle = () => {
    setIsChecked(!isChecked);
  };
  return (
    <div className={`screen ${isChecked ? 'bg-light' : 'bg-dark'}`}>
      <Sidebar
        showSidebar={showSidebar}
        setShowSidebar={setShowSidebar}
        isOpen={isOpen}
        setisOpen={setisOpen}
        isChecked={isChecked}
        setIsChecked={setIsChecked}
        handleToggle={handleToggle}
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
          handleToggle={handleToggle}
          isChecked={isChecked}
        />
        <div className={`page-content ${isChecked ? 'bg-light' : 'bg-dark'}`}>
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Layout;
