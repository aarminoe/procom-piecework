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

function App() {

  useEffect(() => {
    fetch('https://0dgaw8bfm0.execute-api.us-east-2.amazonaws.com/dev/jobs')
    .then(res => res.json())
    .then(data => console.log(data))
  }, [])

  function handleTest() {
    fetch('https://0dgaw8bfm0.execute-api.us-east-2.amazonaws.com/jobs', {
      method: "PUT",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        tech: 'anoe',
        date: 'One more'
      })
    })
    .then(res => res.json())
    .then(data => console.log(data))
  }

  return (
    <div className="App">
      <button onClick={handleTest}>put</button>
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
