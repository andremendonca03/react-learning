import React from "react";

const Product = ({ product }) => {
  const [data, setData] = React.useState(null);

  React.useEffect(() => {
    window
      .fetch(`https://ranekapi.origamid.dev/json/api/produto/${product}`)
      .then((r) => r.json())
      .then((rJSON) => setData(rJSON));
  });

  if (!data) {
    return null;
  }
  return (
    <div className="product">
      <h1>{data.nome}</h1>
      <p>{data.preco}</p>
    </div>
  );
};

export default Product;
