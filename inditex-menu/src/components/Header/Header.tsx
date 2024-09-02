import React from 'react';
import './Header.scss';
import Nav from './Nav/Nav';

const Header: React.FC = () => {
  return (
    <header className="header">
      <div className="left">
        <Nav />
        <div className="logo">INDITEX</div>
      </div>
      
      <div className="right">
        <span>ITX 45,80 €</span>
        <a href="#contact">Contacto</a>
        <a href="#language">EN / ES</a>
        <a href="#search" className="searchIcon">&#128269;</a> {/* Unicode for search icon */}
      </div>
    </header>
  );
};

export default Header;