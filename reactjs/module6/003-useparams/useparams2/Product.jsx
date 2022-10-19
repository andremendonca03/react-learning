import React from 'react';
import { useLocation, useParams } from 'react-router-dom';

const Product = () => {
  const params = useParams();
  const search = new URLSearchParams(useLocation().search);

  return (
    <div>
      <h1>Product</h1>
      <h2>id = {params.name}</h2>
      <h3>Color = {search.get("color")}</h3>
    </div>
  )
}

export default Product;