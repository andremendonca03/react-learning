import React from "react";

const Products = ({ product }) => {
  if (product) {
    return (
      <>
        <h1>{product.nome}</h1>
        <p>R$ {product.preco}</p>
        <img src={product.fotos[0].src} alt={product.fotos[0].titulo} />
      </>
    )
  } else {
    return <div>Selecione um produto</div>
  }
};

export default Products;
