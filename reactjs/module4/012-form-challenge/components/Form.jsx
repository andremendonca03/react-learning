import React from "react";
import { GlobalContext } from "../GlobalContext";
import Field from "./Field";

const Form = () => {
  const global = React.useContext(GlobalContext);

  const isAllAnswered = global.actualQNumber >= global.questions.length;

  function handleSubmit(e) {
    e.preventDefault();
    if (!isAllAnswered) {
      if (global.questions[global.actualQNumber].answer === global.checked) {
        global.setCorrects(prev => prev + 1);
      }
      global.setActualQNumber(prev => prev + 1);
      global.setAnswers(prev => [...prev, global.checked]);
      global.setChecked("");
    }
  }

  function handleReset(e) {
    e.preventDefault();
    global.setActualQNumber(0);
    global.setAnswers([]);
    global.setChecked("");
    global.setCorrects(0);
  }

  return (
    <form onSubmit={handleSubmit}>
      {!isAllAnswered && <Field />}
      {!isAllAnswered && <button type="submit">Next</button>}
      {isAllAnswered && (
        <>
          <p>
            Your total score is {global.corrects}/{global.questions.length}
          </p>
          <button type="button" onClick={handleReset}>Reset</button>
        </>
      )}
    </form>
  );
};

export default Form;
