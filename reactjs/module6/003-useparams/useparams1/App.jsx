import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { GlobalStorage } from "./GlobalStorage";
import Header from "./Header";
import Contact from "./Contact";
import Product from "./Product";

const App = () => {
  return (
    <BrowserRouter>
      <GlobalStorage>
        <Header />
        <Routes>
          <Route path="contact" element={<Contact />} />
          <Route path="product/:name" element={<Product />} />
        </Routes>
      </GlobalStorage>
    </BrowserRouter>
  );
};

export default App;
