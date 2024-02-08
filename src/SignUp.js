import React from "react";

import { useState } from "react";
import UserPool from "./UserPool";


function SignUp() {

    const [email, setEmail] = useState('')
    const [pass, setPass] = useState('')
    const [errorSignUp, setErrorSignUp] = useState(false)
    const [error, setError] = useState('')
    const [directToLogin, setDirectToLogin] = useState(false)

    const attributeList = [email];

    
    function onSubmit(e) {
        e.preventDefault()
        UserPool.signUp(email, pass, [], null, (err, data) => {
            if (err) {
                console.error(err)
                setError(err)
                setErrorSignUp(true)
            } else {
                setDirectToLogin(true)
            }
        })
    }
    console.log(email)

    return (
        <div className="App">
           
        <div>
            <form onSubmit={onSubmit}>
            <input value={email} onChange={e => setEmail(e.target.value)}/>
            <input value={pass} type='password' onChange={e => setPass(e.target.value)}/>
            <button type='submit'>Sign Up</button>
            </form>
            <div>
                {errorSignUp && directToLogin == false ? <div>
                    <p className="password-must-have-message">
                        Please enter a valid email
                    </p>
                    <p className="password-must-have-message"> 
                        Password must contain:
                    </p>
                    <p>
                        <ul className="error-list">
                            <li>An uppercase letter</li>
                            <li>A number</li>
                            <li>A special character</li>  
                        </ul>
                    </p> 
                </div> : null}
                {directToLogin ? <div className="signup-success-message">
                    Welcome! Please Log In!
                </div> : null}
            </div>
        </div>
        </div> 
    );
}

export default SignUp