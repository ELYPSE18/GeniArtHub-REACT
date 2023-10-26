import React from 'react';
import logo from '/img/logo-black.png';
import { NavLink } from 'react-router-dom';
import '../styles/styles.css';
import cart from '/img/cart.svg';
    

const Header = () => {
  return (
    <header>
    <div>
        <NavLink to="/">
            <img src={logo} alt="Logo GeniArtHub version sombre"/>
        </NavLink>
        <NavLink id="carticon" to="/cart"><img src={cart} alt="Aller au panier"/></NavLink>
    </div>
</header>
  );
};

export default Header;