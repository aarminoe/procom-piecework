import React from "react";
import UserPool from "./UserPool";
import { useState } from "react";
import { useContext } from "react";
import { AccountContext } from "./Account";

function Login({}) {
    
    const [email, setEmail] = useState('')
    const [pass, setPass] = useState('')
    const [loginFailure, setLoginFailure] = useState(false)
  
    const { authenticate } = useContext(AccountContext)
  
    function onSubmit(e) {
      e.preventDefault()
      authenticate(email, pass)
          .then(data => {
              console.log(email)
              console.log('Logged In!', data)
              handleCheck()
          })
          .catch(err => {
              console.error('Failed to login!', err)
              setLoginFailure(true)
          })
    }
    console.log(email)
  
    
    function handleCheck() {
      const user = UserPool.getCurrentUser()
      if (user) {
          console.log('user found')
      }
      
    }
  
    return (
      <div className="App">
        <div>
          <form onSubmit={onSubmit}>
            <input value={email} onChange={e => setEmail(e.target.value)}/>
            <input value={pass} type='password' onChange={e => setPass(e.target.value)}/>
            <button type='submit'>Login</button>
          </form>
          {loginFailure ? <div className="login-fail">Username/Password Not Found</div> : null}
        </div>
      </div>
    );
  }
  
  export default Login