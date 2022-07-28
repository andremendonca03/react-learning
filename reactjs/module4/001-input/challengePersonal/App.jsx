import React from "react";
import { GlobalStorage, GlobalContext } from "./GlobalStorage";
import InputField from "./InputField";
import FormComponent from "./FormComponent";

/*
// Faça um fetch (POST) para a API abaixo
// Para a criação ser aceita é necessário enviar dodos de:
// nome, email, senha, cep, rua, numero, bairro, cidade e estado

// Essa é a função utilizada para realizar o POST
fetch('https://ranekapi.origamid.dev/json/api/usuario', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  // form é o objeto com os dados do formulário
  body: JSON.stringify(form),
});

// Mostre uma mensagem na tela, caso a resposta da API seja positiva
*/

const App = () => {
  function handleSubmit(e) {
    e.preventDefault();

  /*  fetch("https://ranekapi.origamid.dev/json/api/usuario", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form),
    });
    console.log(form);*/
  }

  return (
    <GlobalStorage>
      <FormComponent />
    </GlobalStorage>
  );
};

export default App;
