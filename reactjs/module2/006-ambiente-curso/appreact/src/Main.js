import React from 'react';
import SingleProduct from './SingleProduct';

const Main = ({ page, products }) => {
  
  if (page === 'Home') {
    return (
      <p>This is the Home of the Website.</p>
    )
  } else if (page === 'products') {
    return (
      <section>
        {products.map(({nome, propriedades}) => {
          return <SingleProduct key={nome} name={nome} properties={propriedades} />
        })}
      </section>
    )
  }
}

export default Main;