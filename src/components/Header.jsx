import React from 'react';
import './Header.scss';

const Header = ({ isOpen, toggleOpen }) => {
  return (
    <div className="header">
      <div className="table-row">
        <div>Certificate (Class/Insta.)</div>
        <div>HSSC</div>
        <div>Kind</div>
        <div>Expiry Date</div>
        <div>Extended</div>
        <button onClick={toggleOpen} className="toggle-button">
          {isOpen ? '-' : '+'}
        </button>
      </div>
    </div>
  );
};

export default Header;
