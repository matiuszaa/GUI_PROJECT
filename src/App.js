import './App.css';
import { AppHeader } from './components/AppHeader';
import { Dashboard } from './components/menu/Dashboard';
import {theme} from './components/common/commoncomp';
import { ThemeProvider } from '@emotion/react';
import { BrowserRouter, Route, Routes, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Login from './components/login/Login'
import { PermCameraMic } from '@mui/icons-material';

function App() {
  const [login, setLogin] = useState('');

  useEffect(() => {
    let log = localStorage.getItem('login');
    if( log ){
      setLogin(log);
    }
  }, []);

  return (
    <ThemeProvider theme = {theme}>
        <div className="App">
            <BrowserRouter>
              <Routes>
                <Route path='/login' element={<Login login={login} setLogin={setLogin} />} />
                <Route path='/' element={<Dashboard login={login} setLogin={setLogin} />} />
              </Routes>
            </BrowserRouter>  
        </div>
    </ThemeProvider>
  );
}

export default App;
