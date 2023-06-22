import React,{useState, useEffect} from 'react'
import "./LandingPage.css"
import {auth} from '../config/firebase';
import WelcomePage from "./WelcomePage"
import {createUserWithEmailAndPassword,signInWithEmailAndPassword,signOut} from "firebase/auth"

function LandingPage() {
    const [displayName,setDisplayName]=useState("");
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    const [registered,setRegistered]=useState(true);
    const [loginState,setLoginState]=useState(false)

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged((user) => {
          if (user) {
            setLoginState(true);
          } else {
            setLoginState(false);
          }
          
        });
    
        // Cleanup the listener when the component unmounts
        return () => {
          unsubscribe();
        };
      }, []);

    const register = async () => {
        try {
            await createUserWithEmailAndPassword(auth, email, password, displayName)
            setLoginState(true)
        }
        catch (error) {
            alert(error)
        }
    }

    const logIn = async () => {
        try {
            await signInWithEmailAndPassword(auth, email, password,)
            setLoginState(true)
        }
        catch (error) {
            alert(error)
        }
    }

    const logOut = async () => {
        try {
            signOut(auth)
            setLoginState(false)
            alert("Logged out successfully")
        }
        catch (error) {
            alert(error)
        }
    }

    // console.log(auth.currentUser)

    if(loginState===true||auth.currentUser){
        return(
            <div>
                <WelcomePage auth={auth}/>
            </div>
        )
    }
    else{
  
    if (registered === true) {
        // loging in an existing user
        return (
            <div className='login-form'>
                
                <input className='input-field' type="text" id="" placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)} />
                <input className='input-field' type='password' id="" placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)} />
                <button className='submit-button' onClick={logIn}>Login</button>
                <p>Not a member? <span className='link' onClick={() => setRegistered(false)}>Click here to register</span></p>
               
            </div>
        )
    }
    else {
        // registering a new user
        return (
            <div className='login-form'>
                <input className='input-field' type="text" id="" placeholder='Enter full name' value={displayName} onChange={(e) => setDisplayName(e.target.value)} />
                <input className='input-field' type="text" id="" placeholder='Enter email' value={email} onChange={(e) => setEmail(e.target.value)} />
                <input className='input-field' type='password' id="" placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)} />
                <button className='submit-button' onClick={register}>Register</button>
                <p>Already a member? <span className='link' onClick={() => setRegistered(true)}>Click here to login</span></p>
                
                
            </div>
        )

    }
}
}

export default LandingPage