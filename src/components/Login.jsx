import React from 'react';
import './Login.css';

const Login = ({ initializing }) => {

    if (initializing) {
        return (
            <div>Loading...</div>
        )
    } else {
        return (
            <div id="firebaseui-auth-container"></div>
        )
    }
}

export default Login;

