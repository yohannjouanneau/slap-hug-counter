import React, { useEffect } from 'react';
import './App.css';
import { firebaseUi } from './config/FirebaseInit';
import { useAuth } from './hooks/useAuth';
import "firebaseui/dist/firebaseui.css";
import Home from './components/Home'
import Login from './components/Login'
import { userContext } from './context'


const App = () => {

  const { initializing, user } = useAuth()

  useEffect(() => {
    if (!user && !initializing) {
      firebaseUi.init('#firebaseui-auth-container')
    }
  });

  if (!user) {
    return (
      <Login initializing={initializing} />
    )
  }

  return (
    <userContext.Provider value={{ user }}>
      <Home />
    </userContext.Provider>
  );

}

export default App;
