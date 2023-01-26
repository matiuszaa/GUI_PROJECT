import './App.css';
import { AppHeader } from './components/AppHeader';
import Dashboard from './components/menu/Dashboard';
import {theme} from './components/common/commoncomp';
import { ThemeProvider } from '@emotion/react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { useState } from 'react';
import Login from './components/auth/Login'
import CustomerFeedbackPage from './components/page/CustomerFeedbackPage';
import { ctxAuth } from './context/ctxAuth';
import { ctxTheme } from './context/ctxTheme';

function App() {
  const [accountName, setAccountName] = useState('firstAccount');
  const [theme, setTheme] = useState('');
  const [authState, setAuthState] = useState({
    isLogged: false,
    logged: null
  });

  const login = (username) => {
    setAuthState({
      isLogged: true,
      logged: username
    });
  };

  const logout = () => {
    setAuthState({
      isLogged: false,
      logged: null
    });
  };

  return (
    <ctxAuth.Provider value={{ authState, login, logout }}>
      <ctxTheme.Provider value={{ theme, setTheme }}>
      <BrowserRouter>
          {/* <ThemeProvider theme = {theme}> */}
          <div className={`App ${theme}`}>
              <AppHeader></AppHeader>
                  <Routes>
                      <Route path='/login' element={<Login />} />
                      <Route path='/' element={<Dashboard />} />
                      <Route path="/feedback" element={<CustomerFeedbackPage/>} />
                  </Routes>
              </div>
          {/* </ThemeProvider> */}
      </BrowserRouter>  
      </ctxTheme.Provider>
    </ctxAuth.Provider>
  );
}

export default App;
