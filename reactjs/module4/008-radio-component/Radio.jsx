import React from "react";

const Radio = ({ options, value, setRadio, ...props }) => {
  return (
    <>
      {options.map((item, index) => {
        return (
          <label key={index} htmlFor={item}>
            <input
              type="radio"
              id={item}
              value={item}
              checked={value === item}
              onChange={({ target }) => setRadio(target.value)}
              {...props}
            />
            {item}
          </label>
        );
      })}
    </>
  );
};

export default Radio;
