import React from "react";
import Link from "./Link";
import Title from "./Title";
import Main from "./Main";

// Replique a interface como a apresentada na aula
// Utilize a array abaixo para mostrar os produtos
// Quebre em componentes o que precisar ser reutilizado
// Dica: const { pathname } = window.location; (puxa o caminho do URL)

const products = [
  {
    nome: "Notebook",
    propriedades: ["16gb ram", "512gb"],
  },
  {
    nome: "Smartphone",
    propriedades: ["2gb ram", "128gb"],
  },
];

const page = () => {
  const location = window.location.pathname;
  const pageName = location.replace("/", "").split(".")[0];

  if (!pageName) {
    return "Home";
  } else {
    return pageName;
  }
};

const App = () => {
  return (
    <>
      <ul>
        <Link link="./" text="Home" />
        <Link link="./products.html" text="Products" />
      </ul>
      <Title page={page()} />
      <Main page={page()} products={products} />
    </>
  );
};

export default App;
