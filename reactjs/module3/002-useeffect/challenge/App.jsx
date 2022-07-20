import React from "react";
import Product from "./Product";

/*
  - When the user clicked in one of the buttons, do a fetch on the selected product using the API below:
    https://ranekapi.origamid.dev/json/api/produto/notebook
    https://ranekapi.origamid.dev/json/api/produto/smartphone

  - Show the name and price on the screen (divide this information in a Component Product.jsx)
  - Define the selected product as a User's Preference on LocalStorage
  - When the user open the site again, wheter there is a product on LocalStorage, a fetch requisition of it must happen
*/

const App = () => {
  const [product, setProduct] = React.useState(null);

  function handleClick({ target }) {
    setProduct(target.innerText);
  }

  React.useEffect(() => {
    if (window.localStorage.product) {
      setProduct(window.localStorage.product);
    }
  }, []);

  React.useEffect(() => {
    if (product !== null) {
      window.localStorage.product = product;
    }
  }, [product]);

  return (
    <>
      <h1>Preference: {product}</h1>

      <button onClick={handleClick} style={{ marginRight: "1rem" }}>
        notebook
      </button>
      <button onClick={handleClick}>smartphone</button>

      {product && <Product product={product} />}
    </>
  );
};

export default App;
