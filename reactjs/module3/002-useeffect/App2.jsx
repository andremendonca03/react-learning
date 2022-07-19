import React from "react";

const App = () => {
  const [count, setCount] = React.useState(0);
  const [data, setData] = React.useState(null);

  React.useEffect(() => {
    fetch("https://ranekapi.origamid.dev/json/api/produto/notebook")
      .then((r) => r.json())
      .then((r) => setData(r));
  }, []);

  return (
    <div>
      {data && (
        <div>
          <h1>{data.nome}</h1>
          <p>{data.preco * count}</p>
        </div>
      )}
      <button onClick={() => setCount(count + 1)}>{count}</button>
    </div>
  );
};

export default App;
