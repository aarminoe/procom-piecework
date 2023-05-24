import './App.css';
import { Routes, Route } from 'react-router-dom';
import History from './History';
import NavBar from './NavBar';
import Home from './Home';
import Rough from './Rough';
import Trim from './Trim';
import Activation from './Activation';
import Login from './Login';
import { Account } from './Account';
import SignUp from './SignUp';

function App() {
  return (
    <div className="App">
      <h1><NavBar /></h1>
      <Account>
        <Login />
        <SignUp />
      </Account>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path="/history" element={ <History />}/>
        <Route path='/rough' element={ <Rough /> }/>
        <Route path='/trim' element={ <Trim />}/>
        <Route path='/activation' element={ <Activation />}/>
      </Routes>
    </div>
  );
}

export default App;
