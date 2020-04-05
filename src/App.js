import React, { useEffect } from 'react';
import './App.css';
import {firebaseUi} from './config/FirebaseInit';
import {useAuth} from './hooks/useAuth';
import "firebaseui/dist/firebaseui.css";
  
const App = () => {  

  const { initializing, user } = useAuth()
  
  useEffect(() => {
    if (!user && !initializing) {
      firebaseUi.init('#firebaseui-auth-container')
    }
  });

  if (!user) {
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

  return (
    <div>
      {user.displayName}
    </div>
  );

}

export default App;
