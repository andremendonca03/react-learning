import React from "react";
import Products from "./Products";

const Buttons = ({ links, product, setProduct, loading, setLoading }) => {
  return (
    <div>
      {links.map((item, index) => {
        const itemSplitted = item.split("/");
        const itemName = itemSplitted[itemSplitted.length - 1];

        function handleFetch() {
          setLoading(true);
          window.fetch(item).then((r) =>
            r.json().then((prod) => {
              setProduct(prod);
              setLoading(false);
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

      {loading && <p>Loading...</p>}
      {!loading && <Products product={product} />}
    </div>
  );
};

export default Buttons;
