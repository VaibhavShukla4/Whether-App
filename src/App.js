/** @format */

import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home/index';
import LandingPage from './pages/LandingPage/index';
import NotFoundPage from './pages/NotFoundPage/index';
import Layout from './pages/Layout/index';
import './App.css';
function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/" element={<Layout />}>
        {/* <Route index element={<Home />} /> */}
        <Route path="home" element={<Home />} />
      </Route>
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}

export default App;
