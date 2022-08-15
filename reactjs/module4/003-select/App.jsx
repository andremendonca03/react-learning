import React from "react";

const App = () => {
  const [selected, setSelected] = React.useState("");

  return (
    <div>
      <select id="product" onChange={({ target }) => setSelected(target.value)}>
        <option selected disabled value="">
          Select:
        </option>
        <option value="laptop">Laptop</option>
        <option value="tablet">Tablet</option>
        <option value="smartphone">Smartphone</option>
      </select>
      {selected}
    </div>
  );
};

export default App;
