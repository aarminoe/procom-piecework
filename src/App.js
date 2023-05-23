import './App.css';
import { Routes, Route } from 'react-router-dom';
import History from './History';
import NavBar from './NavBar';
import Home from './Home';
import Rough from './Rough';
import Trim from './Trim';
import Activation from './Activation';

function App() {
  return (
    <div className="App">
      <h1><NavBar /></h1>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path="/history" element={ <History />}/>

      </Routes>
    </div>
  );
}

export default App;
