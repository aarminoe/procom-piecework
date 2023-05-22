import './App.css';
import { Routes, Route } from 'react-router-dom';
import History from './History';
import NavBar from './NavBar';

function App() {
  return (
    <div className="App">
      <h1><NavBar /></h1>
      <Routes>
        <Route path="/history" element={ <History />}/>
      </Routes>
    </div>
  );
}

export default App;
