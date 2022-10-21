import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./Home.module.css";

const Home = () => {
  return (
    <section className={styles.productsContainer}>
      <nav className={styles.productsNav}>
        <NavLink to="">Products</NavLink>
        <NavLink to="/contact">Contact</NavLink>
      </nav>
      <div>

      </div>
    </section>
  );
};

export default Home;
