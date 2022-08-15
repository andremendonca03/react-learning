import React from "react";

const App = () => {
  const [text, setText] = React.useState("");

  return (
    <textarea
      id="text"
      rows="5"
      value={text}
      onChange={({ target }) => setText(target.value)}
    />
  );
};

export default App;
