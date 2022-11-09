import React from "react";
import styles from "./NavBar.module.css";
import { NavLink } from "react-router-dom";

const NavBar = () => {

  return (
    <nav className={styles.productsNav}>
      <NavLink to="/" end>Products</NavLink>
      <NavLink to="/contact">Contact</NavLink>
    </nav>
  );
};

export default NavBar;
