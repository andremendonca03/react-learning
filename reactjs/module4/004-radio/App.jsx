import React from "react";

const App = () => {
  const [product, setProduct] = React.useState("");
  const [color, setColor] = React.useState("");

  function handleChange({ target }) {
    if (target.name === "product") {
      setProduct(target.value);
    }
    if (target.name === "color") {
      setColor(target.value);
    }
  }

  return (
    <form>
      Product: {product}
      <br />
      Color: {color}
      <label>
        Notebook
        <input
          type="radio"
          name="product"
          value="notebook"
          onChange={handleChange}
        />
      </label>
      <label>
        Smartphone
        <input
          type="radio"
          name="product"
          value="smartphone"
          onChange={handleChange}
        />
      </label>
      <label>
        Blue
        <input type="radio" name="color" value="blue" onChange={handleChange} />
      </label>
      <label>
        Red
        <input type="radio" name="color" value="red" onChange={handleChange} />
      </label>
    </form>
  );
};

export default App;
