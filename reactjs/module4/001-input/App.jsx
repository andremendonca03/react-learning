import React from "react";

const App = () => {
  const [form, setForm] = React.useState({
    name: "",
    email: "",
  });

  function handleSubmit(e) {
    e.preventDefault();
    console.log(form);
  }

  function handleChange({ target }) {
    const { id, value } = target;
    setForm({ ...form, [id]: value });
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">Name:</label>
      <input type="text" id="name" value={form.name} onChange={handleChange} />
      <label htmlFor="email">Email:</label>
      <input
        type="email"
        id="email"
        value={form.email}
        onChange={handleChange}
      />
      <button>Submit</button>
    </form>
  );
};

export default App;
