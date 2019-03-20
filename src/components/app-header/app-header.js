import React from 'react';
import './app-header.css';

const AppHeader = ({toBuy, done}) => {
    return (
      <div className="app-header d-flex">
          <h1>Products List</h1>
          <h2>{toBuy} more to buy, {done} done</h2>
      </div>
    );
};

export default AppHeader;