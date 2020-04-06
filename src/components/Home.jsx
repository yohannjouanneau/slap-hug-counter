import React from 'react';
import './Home.css';
import { useSession } from '../hooks/useSession'
import {firebase} from '../config/FirebaseInit';

const Home = () => {

  const { user } = useSession()

  const signOut = () => { firebase.auth().signOut() }

  return (
    <div>
      <div>Bonjour, {user.displayName}</div>
      <button onClick={signOut}>Log out</button>
    </div>
  );
}

export default Home;
