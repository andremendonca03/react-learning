import React from 'react';
import {Link, Outlet} from 'react-router-dom';

const Product = () => {
  return (
    <>
      <h2>Product</h2>
      <Link to="">Description</Link>
      <Link to="reviews">Reviews</Link>

      <Outlet />
    </>
  )
}

export default Product;