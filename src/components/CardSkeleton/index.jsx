/** @format */

import React from 'react';
import './index.css'; // Import your CSS file for styling

const CardSkeleton = () => {
  return (
    <div className="skeleton-card">
      <div className="skeleton-thumbnail"></div>
      <div className="skeleton-content">
        <div className="skeleton-title"></div>
        <div className="skeleton-line"></div>
        <div className="skeleton-line"></div>
        <div className="skeleton-line"></div>
      </div>
    </div>
  );
};

export default CardSkeleton;
