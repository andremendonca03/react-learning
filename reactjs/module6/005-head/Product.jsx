import React from 'react';
import Head from "./Head";
import { Link } from "react-router-dom";

const Product = () => {
  return (
    <>
      <Head title="Product" description="Get to know our exciting products!" />
      <h1>Product</h1>
      <Link to="/">Home</Link>
    </>
  )
}

export default Product;