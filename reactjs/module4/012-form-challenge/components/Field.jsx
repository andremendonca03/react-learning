import React from "react";
import { GlobalContext } from "../GlobalContext";

const Field = () => {
  const global = React.useContext(GlobalContext);

  function handleChange({ target }) {
    global.setChecked(target.value);
  }

  return (
    <fieldset>
      <legend>{global.questions[global.actualQNumber].question}</legend>
      <pre>
        {global.questions[global.actualQNumber].options.map((item, index) => {
          return (
            <label key={index}>
              <input
                type="radio"
                id={global.actualQNumber}
                name={`answerQ${global.actualQNumber}`}
                checked={global.checked === item}
                value={item}
                onChange={handleChange}
              />
              {item}
            </label>
          );
        })}
      </pre>
    </fieldset>
  );
};

export default Field;
