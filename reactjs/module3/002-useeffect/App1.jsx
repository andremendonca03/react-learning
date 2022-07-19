import React from "react";

const App = () => {
  const [count, setCount] = React.useState(0);

  console.log("foi fora");

  React.useEffect(() => {
    console.log("foi useEffect");
  }, []);

  React.useEffect(() => {
    document.title = 'Total ' + count;
  }, [count]);

  return <button onClick={() => setCount(count + 1)}>{count}</button>;
};

export default App;
