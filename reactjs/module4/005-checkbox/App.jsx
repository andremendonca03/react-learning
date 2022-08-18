import React from "react";

const App = () => {
  const [colors, setColors] = React.useState(["green"]);

  function handleChange({ target }) {
    if (target.checked) {
      setColors([...colors, target.value]);
    } else {
      const arrayReduced = colors.reduce((acc, item) => {
        if (target.value !== item) {
          return [...acc, item];
        } else {
          return [...acc];
        }
      }, []);

      setColors(arrayReduced);
    }
  }

  return (
    <form>
      <label>
        Blue
        <input
          type="checkbox"
          name="terms"
          value="blue"
          checked={colors.includes("blue")}
          onChange={handleChange}
        />
      </label>
      <label>
        Red
        <input
          type="checkbox"
          name="terms"
          value="red"
          checked={colors.includes("red")}
          onChange={handleChange}
        />
      </label>
      <label>
        Green
        <input
          type="checkbox"
          name="terms"
          value="green"
          checked={colors.includes("green")}
          onChange={handleChange}
        />
      </label>
    </form>
  );
};

export default App;
