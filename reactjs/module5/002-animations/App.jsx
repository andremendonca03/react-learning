import React from 'react';
import './App.css';
import Product from './Product';


const App = () => {
  const [active, setActive] = React.useState(false);


  return (
    <div>
      <button onClick={() => setActive(prev => !prev)}>Activate</button>
      {active && <Product />}
    </div>
  )
}

export default App;