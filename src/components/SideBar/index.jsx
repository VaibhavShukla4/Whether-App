/** @format */

import React, { useState } from 'react';
import './index.css';
import NavLinks from '../NavLinks';
import NavLinkSmall from '../NavLinkSmall/index';
import Humberg from './../../assets/svg/humberg.svg';
import Dashboard from './../../assets/svg/dashboard.svg';
import Theme from '../Theme/Index';
const Sidebar = ({
  isOpen,
  showSidebar,
  setShowSidebar,
  setisOpen,
  setIsChecked,
  isChecked,
}) => {
  const [active, setActive] = useState('');
  const navData = [
    {
      title: 'Home',
      route: '',
      Icon: Dashboard,
    },
  ];
  const handleClick = () => {};

  const handleToggle = () => {
    setIsChecked(!isChecked);
  };

  return (
    <>
      <div className={`${isOpen ? 'vertical-menu' : 'vertical-menu-hide'}`}>
        <div className="sidebar-height">
          <div
            className={`${
              isOpen ? 'navbar-brand-box' : 'navbar-brand-box-hide'
            }`}
          >
            <div className="logo logo-dark">
              {isOpen ? (
                <span className="logo-lg" onClick={() => setisOpen(!isOpen)}>
                  <img src={Humberg} alt="" />
                </span>
              ) : (
                <span className="logo-sm" onClick={() => setisOpen(!isOpen)}>
                  <img src={Humberg} alt="" />
                </span>
              )}
            </div>
          </div>
          <div className="light-break"></div>
          <div className="mm-active">
            <ul
              className={`${
                isOpen
                  ? 'metismenu list-unstyled mm-show'
                  : 'metismenu-hide list-unstyled mm-show'
              }`}
            >
              <NavLinks
                handleClick={handleClick}
                active={active}
                isOpen={isOpen}
                navbar={navData}
              />
            </ul>
          </div>
          <div className="light-break"></div>
          <div className="theme-btn-center">
            <Theme handleToggle={handleToggle} isChecked={isChecked} />
          </div>
          {/* <div
            className={`${isOpen ? 'logout-section' : 'logout-section-hide'}`}
          >
            <div
              className={`${
                isOpen ? 'logout-alignment' : 'logout-alignment-hide'
              }`}
            >
              <span className="d-flex" style={{ cursor: 'pointer' }}>
                <span className={`${isOpen ? 'logout-text' : 'display-none'}`}>
                  Logout
                </span>
              </span>
            </div>
          </div> */}
        </div>
      </div>
      {showSidebar ? (
        <div className="small-device-sidebar sidebar-height">
          <div className="mm-active">
            <div className="hide-content">
              {/* <img src={LogoNazoxLight} alt="" style={{ width: '225px' }} /> */}
              <span
                className="cancle-sidebar"
                onClick={() => setShowSidebar(false)}
              >
                {/* <AiFillCloseCircle fontSize={45} /> */}
              </span>
            </div>
            <div className="small-mm-active">
              <ul
                className={`${'small-metismenu  list-unstyled mm-show mm-active'}`}
                style={{ width: '290px' }}
              >
                <NavLinkSmall
                  handleClick={handleClick}
                  active={active}
                  isOpen={isOpen}
                  navbar={navData}
                />
              </ul>
            </div>
            <div className="small-logout-section">
              <div className="logout-alignment">
                <span
                  className="d-flex"
                  style={{ cursor: 'pointer' }}
                  // onClick={handleLogout}
                >
                  <span className="logout-text">Logout</span>
                  {/* <img src={Logout} alt="Logout" /> */}
                </span>
              </div>
            </div>
          </div>
        </div>
      ) : (
        ''
      )}
    </>
  );
};

export default Sidebar;
