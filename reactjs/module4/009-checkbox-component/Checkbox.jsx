import React from "react";

const Checkbox = ({ options, value, setCheckbox }) => {
  function handleChange({ target }) {
    if (target.checked) {
      setCheckbox([...value, target.value]);
    } else {
      setCheckbox(value.filter(item => item !== target.value));
    }
  }

  return (
    <>
      {options.map((item, index) => {
        return (
          <label key={index}>
            <input
              type="checkbox"
              checked={value.includes(item)}
              value={item}
              onChange={handleChange}
            />
            {item}
          </label>
        );
      })}
    </>
  );
};

export default Checkbox;
