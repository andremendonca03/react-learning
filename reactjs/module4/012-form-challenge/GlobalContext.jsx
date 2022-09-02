import React from "react";

export const GlobalContext = React.createContext();

export const GlobalStorage = ({ children }) => {
  const questions = [
    {
      question: "Which method is used to create components?",
      options: [
        "React.makeComponent()",
        "React.createComponent()",
        "React.createElement()",
      ],
      answer: "React.createElement()",
      id: "q1",
    },
    {
      question: "How can we import an external component?",
      options: [
        'import Component from "./Component"',
        'require("./Component")',
        'import "./Component"',
      ],
      answer: 'import Component from "./Component"',
      id: "q2",
    },
    {
      question: "Which hook is not native?",
      options: ["useEffect()", "useFetch()", "useCallback()"],
      answer: "useFetch()",
      id: "q3",
    },
    {
      question: "Which word should be used to create a custom hook?",
      options: ["set", "get", "use"],
      answer: "use",
      id: "q4",
    },
  ];

  const [actualQNumber, setActualQNumber] = React.useState(0);
  const [checked, setChecked] = React.useState("");
  const [answers, setAnswers] = React.useState([]);
  const [corrects, setCorrects] = React.useState(0);

  return (
    <GlobalContext.Provider
      value={{
        actualQNumber,
        setActualQNumber,
        checked,
        setChecked,
        answers,
        setAnswers,
        corrects,
        setCorrects,
        questions,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
