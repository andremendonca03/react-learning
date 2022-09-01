import React from "react";
import { GlobalContext } from "../GlobalContext";
import Field from "./Field";

const Form = () => {
  const global = React.useContext(GlobalContext);

  const isAllAnswered = global.actualQNumber >= global.questions.length;

  function handleSubmit(e) {
    e.preventDefault();
    if (!isAllAnswered) {
      global.setActualQNumber((prev) => prev + 1);
      global.setAnswers((prev) => [...prev, global.checked]);
      global.setChecked("");
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      {!isAllAnswered && <Field />}
      {!isAllAnswered && <button type="submit">Next</button>}
      {isAllAnswered && (
        <p>
          Your total score is {global.answers.length}/{global.questions.length}
        </p>
      )}
    </form>
  );
};

export default Form;
