import React from 'react';
import './Home.css';
import { useSession } from '../hooks/useSession'
import { firebase } from '../config/FirebaseInit';
import AddPeople from "./AddPeople"
import PeopleList from "./PeopleList"

const Home = () => {

  const { user } = useSession()

  const signOut = () => { firebase.auth().signOut() }

  return (
    <div className="Home-container">
      <div className="Home-profile-info">
        <div className="Home-profile-info-fullname">{user.displayName}</div>
        <button onClick={signOut}>Log out</button>
      </div>
      <div className="Home-people-content">
        <AddPeople/>
        <PeopleList/>
      </div>
    </div>
  );
}

export default Home;
