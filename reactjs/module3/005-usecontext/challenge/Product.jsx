import React from "react";
import { GlobalContext } from "./GlobalContext";

const Product = () => {
  const global = React.useContext(GlobalContext);

  if (!global.data) return null;
  
  const firstProduct = global.data[0].nome;

  return (
    <div>
      {firstProduct}
      <button onClick={global.cleanData}>Clean</button>
    </div>
  )
};

export default Product;
