import React from 'react';
import useLocalStorage from './useLocalStorage';

const App = () => {
  const [product, setProduct] = useLocalStorage('Favourite Product', 'Notebook');

  console.log(window.localStorage['Favourite Product']);

  return (
    <button onClick={() => setProduct('Mobile Phone')}>{product}</button>
  )
}

export default App;