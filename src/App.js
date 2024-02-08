import './App.css';
import React, { useState, useEffect } from 'react';
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
import UserPool from './UserPool';

function App() {

  const [jobList, setJobList] = useState(null)
  const [signedIn, setSignedIn] = useState(false)

  const user = UserPool.getCurrentUser()
  console.log(user)
  useEffect(() => {
    if (user) {
      fetch('https://0dgaw8bfm0.execute-api.us-east-2.amazonaws.com/dev/jobs')
      .then(res => res.json())
      .then(data => setJobList(data))
    }
  }, [])

  function handleSignedIn() {
    setSignedIn(!signedIn)
  }

  return (
    <div className="App">
      {UserPool.getCurrentUser() || signedIn? 
        <div>   
        <h1><NavBar /></h1>   
        <Routes>
          <Route path="/history" element={ <History jobList={jobList} />}/>
          <Route path='/rough' element={ <Rough /> }/>
          <Route path='/trim' element={ <Trim />}/>
          <Route path='/activation' element={ <Activation />}/>
        </Routes>
        </div> :
          <Account >
            <Login signedIn={signedIn} handleSignedIn={handleSignedIn}/>
            <SignUp signedIn={signedIn}/>
          </Account>}
    </div>
  );
}

export default App;
