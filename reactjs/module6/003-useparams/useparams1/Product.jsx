import React from 'react'
import { GlobalContext } from './GlobalStorage';

const Product = () => {
  const global = React.useContext(GlobalContext);
  const params = global.useParams();

  console.log(params);

  return (
    <div>
      <h1>Product</h1>
      <h2>{params.name}</h2>
    </div>
  )
}

export default Product