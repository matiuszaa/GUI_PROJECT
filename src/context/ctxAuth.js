import { createContext, useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";

export let ctxAuth = createContext();

const USERNAME = "test";
const PASSWORD = "test1234";

export const autchenticate = (username, password) => {
  if (username === USERNAME && password === PASSWORD) {
    return true;
  } else {
    return false;
  }
};

export const RequiredAuth = (props) => {
  let { authState } = useContext(ctxAuth);
  let location = useLocation();
  if (!authState.isLogged) {
    return (
      <Navigate
        to="/login"
        state={{
          msg: "Login to get access to this page",
          pathTo: location.pathname
        }}
      />
    );
  }
  return props.children;
};
