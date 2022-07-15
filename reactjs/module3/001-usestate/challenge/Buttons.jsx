import React from "react";
import Products from "./Products";

const Buttons = ({ links, product, setProduct }) => {
  return (
    <div>
      {links.map((item, index) => {
        const itemSplitted = item.split("/");
        const itemName = itemSplitted[itemSplitted.length - 1];

        function handleFetch() {
          window.fetch(item).then((r) =>
            r.json().then((prod) => {
              setProduct(prod);
            })
          );
        }

        return (
          <button
            key={index}
            style={{ marginInline: "8px" }}
            onClick={handleFetch}
          >
            {itemName}
          </button>
        );
      })}
      <Products product={product}/>
    </div>
  );
};

export default Buttons;
