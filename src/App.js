import './App.css';
import { AppHeader } from './components/AppHeader';
import { Dashboard } from './components/menu/Dashboard';
import {StyledEngineProvider} from '@mui/material/styles';
function App() {
  return (
    <StyledEngineProvider >

    <div className="App">
        <AppHeader />
        <Dashboard />
    </div>
    </StyledEngineProvider>
  );
}

export default App;
