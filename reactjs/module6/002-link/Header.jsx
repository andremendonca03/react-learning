import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <h1>Header</h1>
      <nav>
        <Link to="contact">Contact</Link>
        <br />
        <Link to="/">Home</Link>
        <br />
        <Link to="Login">Login --</Link>
      </nav>
    </>
  );
};

export default Header;
