import React from "react";
import Head from "./Head";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <Head title="Home" description="Welcome to my website" />
      <h1>Home</h1>
      <Link to="product">Product</Link>
    </>
  );
};

export default Home;
