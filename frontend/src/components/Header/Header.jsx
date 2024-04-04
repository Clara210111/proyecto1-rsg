import React from 'react';
import { Link } from 'react-router-dom';
import './header.css';

const Header = () => {
  return (
    <div className="header-container">
      <div className="header-left">
        <Link to="/">Company</Link>
        <Link to="/main">Home</Link>
        <Link to="/transfer">Transfer</Link>
      </div>
      <div className="header-right">
        <span>User Logged: userLogged</span>
      </div>
    </div>
  );
};

export default Header;
