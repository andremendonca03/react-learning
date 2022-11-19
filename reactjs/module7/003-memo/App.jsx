import React from 'react';
import Header from './Header';

const App = () => {
  const [count, setCount] = React.useState(0);

  return (
    <div>
      <Header />
      <p>Count is now {count}</p>
      <button onClick={() => {setCount(prev => prev + 1)}}>Add 1</button>
    </div>
  )
}

export default App;