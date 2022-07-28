import React from "react";
import { GlobalContext } from "./GlobalStorage";

const InputField = ({ type, id }) => {
  const { form, setForm } = React.useContext(GlobalContext);

  function handleChange({ target }) {
    setForm({...form, [id]: target.value});
  }

  return (
    <div>
      <label htmlFor={id} style={{ textTransform: "capitalize" }}>
        {id}
      </label>
      <input
        type={type || "text"}
        id={id}
        value={form[id]}
        onChange={handleChange}
      />
    </div>
  );
};

export default InputField;
