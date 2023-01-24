import './App.css';
import { AppHeader } from './components/AppHeader';
import { Dashboard } from './components/menu/Dashboard';
import {theme} from './components/common/commoncomp';
import { ThemeProvider } from '@emotion/react';
import { BrowserRouter, Route, Routes, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Login from './components/login/Login'
import CustomerFeedbackPage from './components/page/CustomerFeedbackPage';
function App() {
  const [login, setLogin] = useState('');
  const [accountName, setAccountName] = useState('firstAccount')
  useEffect(() => {
    let log = localStorage.getItem('login');
    if( log ){
      setLogin(log);
    }
  }, []);

  return (

    <BrowserRouter>
        <ThemeProvider theme = {theme}>
        <div className="App">
            <AppHeader></AppHeader>
                <Routes>
                    <Route path='/login' element={<Login login={login} setLogin={setLogin} />} />
                    <Route path='/' element={<Dashboard accountName={accountName} setter={setAccountName} login={login} setLogin={setLogin} />} />
                    <Route path="/feedback" element={<CustomerFeedbackPage/>} />
                </Routes>
            </div>
        </ThemeProvider>
    </BrowserRouter>  

  );
}

export default App;
