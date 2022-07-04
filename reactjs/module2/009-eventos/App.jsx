import React from "react";

const handleClick = () => {
  alert(`Alert on Page`);
}

const App = () => {
  return (
    <button onClick={handleClick}>
      Buy Now
    </button>
  )
};

export default App;
