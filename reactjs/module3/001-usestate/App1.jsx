import React from "react";

const App = () => {
  const [active, setActive] = React.useState(true);
  const handleClick = () => {
    setActive(!active);
  };
  return (
    <button onClick={handleClick}>{active ? "Active" : "Inactive"}</button>
  );
};

export default App;
