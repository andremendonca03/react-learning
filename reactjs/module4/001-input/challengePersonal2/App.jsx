import React from "react";
import InputField from "./InputField";

const App = () => {
  const pMessage = React.useRef();

  const [form, setForm] = React.useState({
    nome: "",
    email: "",
    senha: "",
    cep: "",
    rua: "",
    numero: "",
    bairro: "",
    cidade: "",
    estado: "",
  });

  const [loading, setLoading] = React.useState(null);
  const [fetchOk, setFetchOk] = React.useState(null);

  function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    window.fetch("https://ranekapi.origamid.dev/json/api/usuario", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form),
    })
    .then(response => {
      setLoading(false);
      setFetchOk(response.ok);
    });
  }

  React.useEffect(() => {
    if (loading) {
      pMessage.current.innerText = "Loading...";
    }
  }, [loading]);

  React.useEffect(() => {
    if (fetchOk !== null) {
      pMessage.current.innerText = (fetchOk ? "Usuário Cadastrado" : "Desculpe, ocorreu um erro");
    }
  }, [fetchOk]);

  return (
    <>
      <form onSubmit={handleSubmit}>
        <InputField id="nome" form={form} setForm={setForm} />
        <InputField type="email" id="email" form={form} setForm={setForm} />
        <InputField type="password" id="senha" form={form} setForm={setForm} />
        <InputField id="cep" form={form} setForm={setForm} />
        <InputField id="rua" form={form} setForm={setForm} />
        <InputField id="numero" form={form} setForm={setForm} />
        <InputField id="bairro" form={form} setForm={setForm} />
        <InputField id="cidade" form={form} setForm={setForm} />
        <InputField id="estado" form={form} setForm={setForm} />

        <p ref={pMessage}></p>
        <button>submit</button>
      </form>
    </>
  );
};

export default App;
