import React from "react";
import Input from "./form/Input";
import Select from "./form/Select";
import Radio from "./form/Radio";
import Checkbox from "./form/Checkbox";

const App = () => {
  const [value, setValue] = React.useState("");
  const [select, setSelect] = React.useState("");
  const [radio, setRadio] = React.useState("");
  const [checkbox, setCheckbox] = React.useState([]);

  return (
    <div>
      <Input id="name" label="Nome" value={value} setValue={setValue} />
      <Select
        value={select}
        options={["notebook", "tablet"]}
        setSelect={setSelect}
      />
      <Radio options={["red", "blue"]} value={radio} setRadio={setRadio} />
      <Checkbox
        options={["Ruby", "JS", "Python"]}
        value={checkbox}
        setCheckbox={setCheckbox}
      />
    </div>
  );
};

export default App;
