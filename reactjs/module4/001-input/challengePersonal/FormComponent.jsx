import React from 'react';
import { GlobalContext, GlobalStorage } from './GlobalStorage';
import InputField from './InputField';

const FormComponent = () => {
  const { form } = React.useContext(GlobalContext);
  const resultMessage = React.useRef();

  async function handleSubmit(e) {
    e.preventDefault();
    console.log(form);
    const response = await fetch("https://ranekapi.origamid.dev/json/api/usuario", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form),
    });
    console.log(JSON.stringify(form));
    
    const responseJSON = await response.json();
    console.log(responseJSON);

    if (!response.ok) {
      resultMessage.current.innerText = responseJSON.message;
    }
  }

  return (
    <GlobalStorage>
      <form onSubmit={handleSubmit}>
        <InputField type="text" id="nome" />
        <InputField type="email" id="email" />
        <InputField type="password" id="senha" />
        <InputField id="cep" />
        <InputField id="rua" />
        <InputField id="numero" />
        <InputField id="bairro" />
        <InputField id="cidade" />
        <InputField id="estado" />
        <p ref={resultMessage}></p>
        <button>Submit</button>
      </form>
    </GlobalStorage>
  )
}

export default FormComponent;