import React from "react";
import { GlobalStorage } from "./GlobalStorage";
import FormComponent from "./FormComponent";

/*
// Do a fetch (POST) to the API below
// In order to create the post, all the data below is required in an object:
// nome, email, senha, cep, rua, numero, bairro, cidade e estado

// This is the function that should be used to do the POST:
fetch('https://ranekapi.origamid.dev/json/api/usuario', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  // form is the object containing the form data
  body: JSON.stringify(form),
});

// Show a message on the screen whether the API response is positive or not.
*/

const App = () => {
  return (
    <GlobalStorage>
      <FormComponent />
    </GlobalStorage>
  );
};

export default App;
