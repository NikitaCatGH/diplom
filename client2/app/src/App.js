import logo from './logo.svg';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import AppRouter from './components/AppRouter';
import NavBarMain from './components/NavBarMain';


function App() {
  return (
    <BrowserRouter>
      <NavBarMain />
      <AppRouter />
    </BrowserRouter>
  );
}

export default App;
