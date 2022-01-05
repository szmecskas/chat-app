import React from 'react'
import { GoogleOutlined, FacebookOutlined } from '@ant-design/icons'
//GoogleOutlined - component sign
import firebase from "firebase/app"
import "../CSS/LoginPage.css"
import {auth} from '../firebase'

const Login = () => {
    return (
        <div id="login-page">
     
              <div id="login-card"> 
              <h2>Welcome To V-Chat</h2>
              <div class="image"></div>
                <div 
                    className="login-button google"
                    onClick={() => auth.signInWithRedirect(new firebase.auth.GoogleAuthProvider())} //enable login with google
                >
                    <GoogleOutlined /> Sign in with Google
                </div>

                <br></br>
                <br></br>

                <div 
                    className="login-button facebook"
                    onClick={() => auth.signInWithRedirect(new firebase.auth.FacebookAuthProvider())}
                >
                    <FacebookOutlined /> Sign in with Facebook
                </div>
            
            </div>
                
         </div>
        
    );
}

export default Login;