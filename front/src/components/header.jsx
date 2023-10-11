import React from 'react';
import logo from '/img/logo-white.png';
import { NavLink } from 'react-router-dom';
import '../styles/styles.css';
    

const Header = () => {
  return (
    <header>
      <div className="row">
        <NavLink to="/">
          <img src={logo} alt="Logo du site GeniArtHub" />
        </NavLink>
      </div>
    </header>
  );
};

export default Header;