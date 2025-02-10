import React from 'react';
import './Menu.scss';

const Menu = ({ selectedTab, setSelectedTab }) => {
  return (
    <div className="menu">
      <button
        className={selectedTab === 'table1' ? 'active' : ''}
        onClick={() => setSelectedTab('table1')}
      >
        Table content
      </button>
      <button
        className={selectedTab === 'MapBox' ? 'active' : ''}
        onClick={() => setSelectedTab('MapBox')}
      >
        MapBox
      </button>
      <button
        className={selectedTab === 'PositionDemo' ? 'active' : ''}
        onClick={() => setSelectedTab('PositionDemo')}
      >
        PositionDemo
      </button>
    </div>
  );
};

export default Menu;
