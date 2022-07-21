import React from "react";

const App = () => {
  const [comments, setComments] = React.useState(["teste", "teste 2"]);

  const [input, setInput] = React.useState("type");

  const inputField = React.useRef();

  function handleChange({ target }) {
    setInput(target.value);
    target.setAttribute('modified', '');
  }

  function handleClick() {
    if (inputField.current.hasAttribute('modified')) {
      setComments([...comments, inputField.current.value])
    }
  }

  return (
    <div>
      <ul>
        {comments.map((item, index) => {
          return <li key={index}>{item}</li>;
        })}
      </ul>
      <input type="text" value={input} onChange={handleChange} ref={inputField} />
      <button onClick={handleClick}>Send</button>
    </div>
  );
};

export default App;
