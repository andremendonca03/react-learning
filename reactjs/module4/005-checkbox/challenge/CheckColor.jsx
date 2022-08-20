import React from "react";

const CheckColor = ({ children, color, colors, setColors }) => {
  function handleChange({ target }) {
    if (target.checked) {
      setColors([...colors, target.value]);
    } else {
      setColors(colors.filter((item) => item !== target.value));
    }
  }

  function handleChecked(item) {
    return colors.includes(item);
  }

  return (
    <label style={{ textTransform: "capitalize" }}>
      {children}
      <input
        type="checkbox"
        style={{ accentColor: color }}
        value={color}
        checked={handleChecked(color)}
        onChange={handleChange}
      />
    </label>
  );
};

export default CheckColor;
