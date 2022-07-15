import React from 'react'

const App = () => {
  const arrayItems = ['Item 1', 'Item 2'];

  const [items, setItems] = React.useState(arrayItems);

  function handleAddItem() {
    setItems([...items, 'New Item']);
  }

  return (
    <>
      <ul>
        {items.map((item, index) => {
          return <li key={index}>{item}</li>;
        })}
      </ul>
      <button onClick={handleAddItem}>Add Item</button>
    </>
  )
}

export default App;