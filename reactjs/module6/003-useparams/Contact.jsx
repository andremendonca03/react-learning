import React from 'react';
import { GlobalContext } from './GlobalStorage';

const Contact = () => {
  const global = React.useContext(GlobalContext);
  const navigate = global.useNavigate();

  return (
    <div>
      <h1>Contact</h1>
      <button onClick={() => navigate("/product/apple")}>GO TO APPLE</button>
      <button onClick={() => navigate("/product/banana")}>GO TO BANANA</button>
    </div>
  )
}

export default Contact;