import './App.css';
import { Dashboard } from './components/menu/Dashboard';
import {
  Route,
  Routes,
  BrowserRouter,
  useNavigate
} from 'react-router-dom';
import Login from './components/login/Login';
import { useState } from 'react';
import { useEffect } from 'react';

function App() {
  const [login, setLogin] = useState('');

  useEffect(() => {
    let log = localStorage.getItem('login');
    if( log ){
      setLogin(log);
    }
  }, []);

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/login' element={<Login login={login} setLogin={setLogin} />} />
          <Route path='/' element={<Dashboard login={login} setLogin={setLogin} />} />
        </Routes>
      </BrowserRouter>  
    </div>
  );
}

export default App;