import React from "react";

const App = () => {
  let [count, setCount] = React.useState(0);

  function handleCounter({ target }) {
    if (target.innerText === "+") {
      setCount(count++);
    } else if (target.innerText === "-") {
      setCount(count--);
    }
  }

  return (
    <>
      <button onClick={handleCounter}>-</button>
      <span>{count}</span>
      <button onClick={handleCounter}>+</button>
    </>
  );
};

export default App;
