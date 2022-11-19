import React from 'react';
import Example from './Example';

const App = () => {
  function reducer(state, action) {
    if (action === "INCREASE") {
      return state += 1;
    } else if (action === "DECREASE") {
      return state -= 1;
    } else {
      throw new Error("Reducer Action Undefined.");
    }
  }

  const [count, dispatch] = React.useReducer(reducer, 0);

  return (
    <div>
      <p>{count}</p>
      <button onClick={() => {dispatch("INCREASE")}}>+</button>
      <button onClick={() => {dispatch("DECREASE")}}>-</button>

      <Example />
    </div>
  )
}

export default App;