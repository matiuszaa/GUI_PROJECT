import { Button, Input } from "@mui/material";
import React, { useContext, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { ctxAuth, autchenticate } from "../../context/ctxAuth";
import { ctxTheme } from "../../context/ctxTheme";
import './login.css'

const ariaLabel = { 'aria-label': 'description' };

const Login = () => {
  let { login } = useContext(ctxAuth);
  const {theme} = useContext(ctxTheme);
  const location = useLocation();
  const navigate = useNavigate();
  
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState(location.state.msg);

  const loginCheck = (e) => {
    e.preventDefault();
    if (autchenticate(username, password)) {
      login(username);
      navigate(location.state.pathTo ?? "/");
    } else {
      setMessage("Bad username or password.");
    }
  };


  return (
    <div className={`loginPage ${theme}`}>
      <div className="login">
        <h1>Zaloguj się</h1>
        <Input value={username} onChange={e => setUsername(e.target.value)} type='text' placeholder="username"/>
        <Input value={password} onChange={e => setPassword(e.target.value)} type='password' placeholder="password"/>
        {message ? <p style={{ color: "red" }}>{message}</p> : null}
        <Button type="submit" onClick={loginCheck} variant="contained">Contained</Button>
      </div>
    </div>
  )
}

export default Login;
