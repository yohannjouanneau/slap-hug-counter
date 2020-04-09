import React from 'react';
import './Login.css';

const Login = ({ initializing }) => {
    
    if (initializing) {
        return (
            <div>Loading...</div>
        )
    } else {
        return (
            <div className="Login-container">
                <div className="Login-intro-text">You want to hug or slap your friend, but you can't right now. Don't worry keep the count now and do it later :-)</div>
                <div id="firebaseui-auth-container"></div>
            </div>
        )
    }
}

export default Login;

