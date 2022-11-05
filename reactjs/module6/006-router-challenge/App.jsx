import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Home';
import Contact from './Contact';
import Product from './Product';
import NotFound from './NotFound';

const App = () => {
  const [products, setProducts] = React.useState(fetchProducts);

  async function fetchProducts() {

    const response = await window.fetch("https://ranekapi.origamid.dev/json/api/produto");
    const responseJSON = await response.json();
    setProducts(responseJSON);

  }

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home products={products} />} />
        <Route path="contact" element={<Contact products={products} />} />
        <Route path="product/*" element={<Product products={products} />}>
          {products[0] && products.map((item) => {
            return (
              <Route path={`${item.id}`} element={<Product products={products} />} key={item.id} />
            )
          })}
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
