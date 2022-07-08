import React from "react";

const Title = ({ color, text }) => {
  return <h1 style={{ color: color }}>{text}</h1>;
};

const Car = ({ children }) => {
  return <h2>{children}</h2>;
};

const Input = ({ children, id, type, ...props }) => {
  return (
    <div>
      <label htmlFor={id} style={{ textTransform: "uppercase" }}>
        {children}
      </label>
      <input id={id} type={type} {...props} />
    </div>
  );
};

const App = () => {
  return (
    <>
      <Title text="Title 1" color="red" />
      <Title text="Title 2" color="limegreen" />
      <Car>Volkswagen</Car>
      <Input id="name" type="text" required>
        What's your name?
      </Input>
    </>
  );
};

export default App;
