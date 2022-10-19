import React from "react";
import { NavLink } from "react-router-dom";
import './Header.css';

const Header = () => {
  return (
    <>
      <h1>Header</h1>
      <nav>
        <NavLink to="product/laptop?color=blue">Blue Laptop</NavLink>
        <br />
        <NavLink to="product/laptop?color=green">Green Laptop</NavLink>
        <br />
        <NavLink to="product/tablet">Tablet</NavLink>
        <br />
        <NavLink to="/" end>Home</NavLink>
      </nav>
    </>
  );
};

export default Header;
