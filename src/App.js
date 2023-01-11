import './App.css';
import { AppHeader } from './components/AppHeader';
import { Dashboard } from './components/menu/Dashboard';
import {theme} from './components/common/commoncomp';
import { ThemeProvider } from '@emotion/react';
function App() {
  return (
    <ThemeProvider theme = {theme}>
        <div className="App">
            <AppHeader />
            <Dashboard />
        </div>
    </ThemeProvider>
  );
}

export default App;
