import React from "react";
import Fruits from "./Fruits";

function reducer(state, action) {
  if (action.type === "REMOVE") {
    return state.filter(item => item !== action.payload);
  } else if (action.type === "ADD") {
    return [...state, action.payload];
  }
}

const Example = () => {
  const [fruitsArr, dispatch] = React.useReducer(reducer, ["banana", "grape"]);

  return (
    <div>
      <br />
      <br />
      <button onClick={() => dispatch({ type: "REMOVE", payload: "banana" })}>
        Remove Banana
      </button>
      <br />
      <button onClick={() => dispatch({ type: "REMOVE", payload: "grape" })}>
        Remove Grape
      </button>
      <br /> <br />
      <button onClick={() => dispatch({ type: "ADD", payload: "banana" })}>
        Add Banana
      </button>
      <button onClick={() => dispatch({ type: "ADD", payload: "grape" })}>
        Add Grape
      </button>
      <ul>
        {fruitsArr.map((item) => (
          <li>{item}</li>
        ))}
      </ul>
      <Fruits fruitsArr={fruitsArr} dispacthFruitsArr={dispatch} />
    </div>
  );
};

export default Example;
