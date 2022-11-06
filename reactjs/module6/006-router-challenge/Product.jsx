import React from 'react';
import {useLocation} from "react-router-dom";
import styles from "./Home.module.css";
import NavBar from './components/NavBar';

const Product = ({products, loading, setLoading}) => {
  const location = useLocation();
  const pathname = location.pathname.split("/");
  const actualItem = products[0] && (products.find((item) => item.id === pathname[pathname.length - 1]));
  console.log(actualItem);

  return (
    <>
      {products[0] && <article className={styles.productsContainer}>
        <NavBar />
        
        <section className={styles.productPage}>
          <div className={styles.productImg}>
            <img src={actualItem.fotos[0].src} alt="#" />
          </div>
          <div className={styles.productContent}>
            <h1>{actualItem.nome}</h1>
            <span>R$ {actualItem.preco}</span>
            <p>{actualItem.descricao}</p>
          </div>
        </section>
      </article>}
    </>
  )
}

export default Product;