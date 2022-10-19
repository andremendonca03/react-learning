import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Header";
import Product from "./Product";


const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="product/:name" element={<Product />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
