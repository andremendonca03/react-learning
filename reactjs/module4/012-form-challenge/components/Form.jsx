import React from "react";
import { GlobalContext } from "../GlobalContext";
import Field from "./Field";

const Form = () => {
  const global = React.useContext(GlobalContext);

  function handleSubmit(e) {
    e.preventDefault();
    if (global.actualQNumber >= 3) {
      global.setActualQNumber(0);
    } else {
      global.setActualQNumber((prev) => prev + 1);
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <Field />
      <button type="submit">Next</button>
    </form>
  );
};

export default Form;
