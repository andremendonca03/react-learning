import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Product from './Product';
import Home from './Home';
import ProductDescription from './ProductDescription';
import ProductReviews from './ProductReviews';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="product" element={<Product />}> 
          <Route path="/" element={<ProductDescription />} />
          <Route path="/reviews" element={<ProductReviews />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App;