import React from "react";
import { Link } from "react-router-dom";
import styles from "./Home.module.css";
import NavBar from './components/NavBar';

const Home = ({products, }) => {

  return (
    <section className={styles.productsContainer}>
      <NavBar />
      <div className={styles.productsList}>
        {products[0] && products.map(item => {
          return (
            <Link to={`product/${item.id}`} className={styles.productSingle} key={item.id}>
              <img src={item.fotos[0].src} alt="#" />
              <h2>{item.nome}</h2>
            </Link>
          );
        })}
      </div>
    </section>
  );
};

export default Home;
