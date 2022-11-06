import React from 'react';
import photo from './img/contact.jpg';
import styles from './Home.module.css';
import NavBar from './components/NavBar';

const Contact = () => {
  return (
    <section className={styles.productsContainer}>
      <NavBar />
      <div className={styles.contactImg}>
        <img src={photo} alt="Contact Us" />
      </div>
      <article className={styles.contactInfo}>
        <h1>Contact Us now</h1>
        <ul>
          <li><span>andre@gmail.com</span></li>
          <li><span>0451 009 999</span></li>
          <li><span>NextJS st., 4550</span></li>
        </ul>
      </article>
    </section>
  )
}

export default Contact;