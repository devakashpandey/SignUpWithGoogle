import React from 'react'
import "./SignUp.css"
import {app} from "./firebase";
import {getAuth, signInWithPopup, GoogleAuthProvider} from "firebase/auth"

const auth = getAuth(app)
const googleProvider = new GoogleAuthProvider()

const GoogleSignup = () => {

let googlesignup = () => {
    signInWithPopup(auth, googleProvider)
}

  return (
     <>
     <h1>Sign Up With Google</h1><br/>
      <div className='signup-page'>
      
         <label>Email</label>
         <input type="email" required placeholder='Enter your email' 
          ></input>

         <label>Password</label>
         <input type="password" required placeholder='Enter your password'
         ></input>

         <button className='signup'>Sign Up</button><br/>
         
      </div><br/>

      <button onClick={googlesignup}  className='signupwithgoogle'>Sign Up With Google</button>
     </>
  )
}

export default GoogleSignup;
