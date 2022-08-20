import React from "react";
import CheckColor from "./CheckColor";

const App = () => {
  const colorsArray = ["blue", "purple", "orange", "green", "red", "grey"];
  const [colors, setColors] = React.useState([]);

  return (
    <form>
      {colorsArray.map((item, index) => (
        <CheckColor
          key={index}
          color={item}
          colors={colors}
          setColors={setColors}
        >
          {item}
        </CheckColor>
      ))}

      <ul>
        {colors.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </form>
  );
};

export default App;
