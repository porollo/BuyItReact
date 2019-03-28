import React from 'react';
import './app-header.css';

const AppHeader = ({toBuy, done}) => {
    return (
      <div className="app-header">
          <h1>Products List</h1>
          <h2>{toBuy} Left to buy, {done} Purchased</h2>
      </div>
    );
};

export default AppHeader;