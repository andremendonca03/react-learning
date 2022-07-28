import React from "react";

const InputField = ({ type, id, form, setForm }) => {
  function handleChange({ target }) {
    const {id, value} = target;
    setForm({...form, [id]: value});
  }

  /*React.useEffect(() => {
    console.log(form);
  }, [form]);*/

  return (
    <div>
      <label htmlFor={id} style={{ textTransform: "capitalize" }}>
        {id}
      </label>
      <input
        type={type || "text"}
        id={id}
        value={form[id]}
        required
        onChange={handleChange}
      />
    </div>
  );
};

export default InputField;
