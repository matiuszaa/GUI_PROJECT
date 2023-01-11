import { Button, Input } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import { AppHeader } from "../AppHeader";
import './login.css'

const ariaLabel = { 'aria-label': 'description' };

const Login = ({login, setLogin, authorize}) => {
  const navigate = useNavigate();

  const start = () => {
    localStorage.setItem('login', login);
    navigate('/');
  }

  return (
    <div className="login">
      <AppHeader></AppHeader>
      <h1>Zaloguj się</h1>
      <Input value={login} onChange={e => setLogin(e.target.value)} defaultValue="Hello world" inputProps={ariaLabel} />
      <Button onClick={start} variant="contained">Contained</Button>
    </div>
  )
}

export default Login;
