import React from "react";

// Mostre os dados da aplicação, como aprensetado no vídeo
// Não utilize CSS externo, use o style para mudar as cores
// Se a situação estiver ativa pinte de verde, inativa vermelho
// Se o gasto for maior que 10000 mostre uma mensagem
const luana = {
  cliente: "Luana",
  idade: 27,
  compras: [
    { nome: "Notebook", preco: "R$ 2500" },
    { nome: "Geladeira", preco: "R$ 3000" },
    { nome: "Smartphone", preco: "R$ 1500" },
  ],
  ativa: true,
};

const mario = {
  cliente: "Mario",
  idade: 31,
  compras: [
    { nome: "Notebook", preco: "R$ 2500" },
    { nome: "Geladeira", preco: "R$ 3000" },
    { nome: "Smartphone", preco: "R$ 1500" },
    { nome: "Guitarra", preco: "R$ 3500" },
  ],
  ativa: false,
};

const App = () => {
  const dados = mario;

  const situationStyle = {
    color: "blue",
  };
  const limit = document.querySelector(".limit");

  const total = () => {
    const totalGasto = dados.compras.reduce((acc, item) => {
      return acc + Number(item.preco.replace("R$ ", ""));
    }, 0);

    if (totalGasto > 10000) {
      limit.innerHTML = "Cuidado brow";
    }
    return totalGasto;
  };

  if (dados.ativa) {
    situationStyle.color = "limegreen";
  } else {
    situationStyle.color = "red";
  }

  return (
    <>
      <div>Nome: {dados.cliente}</div>
      <div>Idade: {dados.idade}</div>
      <div>
        Situação:
        <span style={{ color: situationStyle.color }}>
          {dados.ativa ? " Ativa" : " Inativa"}
        </span>
      </div>
      <div>Total Gasto: {total()}</div>
      <div className="limit"></div>
    </>
  );
};

export default App;
