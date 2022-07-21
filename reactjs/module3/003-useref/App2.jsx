import React from 'react'

const App = () => {
  const [cart, setCart] = React.useState(0);
  const [notification, setNotification] = React.useState(null);

  function handleClick() {
    setCart(cart + 1);
    setNotification('Item added to cart');
    setTimeout(() => {
      setNotification(null);
    }, 2000);
  }

  return (
    <div>
      <button onClick={handleClick}>Add to cart {cart}</button>

      <p>{notification}</p>
    </div>
  )
}

export default App;