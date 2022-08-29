import React from "react";

const Select = ({ options, setSelect, ...props }) => {
  return (
    <select onChange={({ target }) => setSelect(target.value)} {...props}>
      <option value="" disabled>
        Select:
      </option>
      {options.map((item, index) => {
        return (
          <option key={index} value={item}>
            {item}
          </option>
        );
      })}
    </select>
  );
};

export default Select;
