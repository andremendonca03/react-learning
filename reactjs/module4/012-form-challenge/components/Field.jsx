import React from "react";
import { GlobalContext } from "../GlobalContext";

const Field = () => {
  const global = React.useContext(GlobalContext);

  return (
    <fieldset>
      <legend>{global.questions[global.actualQNumber].question}</legend>
    </fieldset>
  );
};

export default Field;
