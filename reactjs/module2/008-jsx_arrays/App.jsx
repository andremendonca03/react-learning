import React from "react";

const Allproducts = [
  {
    id: 1,
    name: "Smartphone",
    price: "R$ 2000",
    colors: ["#29d8d5", "#252a34", "#fc3766"],
  },
  {
    id: 2,
    name: "Notebook",
    price: "R$ 3000",
    colors: ["#ffd045", "#d4394b", "#f37c59"],
  },
  {
    id: 3,
    name: "Tablet",
    price: "R$ 1500",
    colors: ["#365069", "#47c1c8", "#f95786"],
  },
];

const products = Allproducts.filter((item) => {
  return Number(item.price.slice(3)) > 1500;
});

const App = () => {
  return (
    <section>
      {products.map((item) => {
        return (
          <React.Fragment key={item.id}>
            <h1>{item.name}</h1>
            <p>{item.price}</p>
            <ul>
              {item.colors.map((item) => {
                return (
                  <li
                    key={item}
                    style={{
                      color: "#FFF",
                      backgroundColor: item,
                    }}
                  >
                    {item}
                  </li>
                );
              })}
            </ul>
          </React.Fragment>
        );
      })}
    </section>
  );
};

export default App;
