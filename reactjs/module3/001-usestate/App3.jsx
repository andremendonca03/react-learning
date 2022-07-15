import React from "react";

const App = () => {
  const [data, setData] = React.useState({ nome: "Andre", idade: 18 });

  function handleState() {
    setData({ ...data, cae: 'true' })
  }

  return (
    <>
      <p>{data.nome}</p>
      <p>{data.idade}</p>
      <p>{data.cae}</p>
      <button onClick={handleState}>Add</button>
    </>
  );
};

export default App;
