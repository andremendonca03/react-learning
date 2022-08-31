import React from "react";
import { GlobalStorage } from "./GlobalContext";
import Form from "./components/Form";

const App = () => {
  return (
    <GlobalStorage>
      <Form />
    </GlobalStorage>
  );
};

export default App;
