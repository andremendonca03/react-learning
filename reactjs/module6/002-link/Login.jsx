import React from 'react';
import {useNavigate} from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();
  return (
    <form>
      <label>
        Email
        <input type="text" />
      </label>
      <label>
        Password
        <input type="password" />
      </label>
      <button onClick={() => {navigate("/account")}}>Login --</button>
    </form>
  )
}

export default Login;