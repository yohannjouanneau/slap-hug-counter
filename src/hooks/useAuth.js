import { useState, useEffect } from 'react';
import {firebase} from '../config/FirebaseInit';

export const useAuth = () => {
    
    const [state, setState] = useState(() => { 
        const user = firebase.auth().currentUser 
        return { initializing: !user, user } 
    })
    
    function onChange(user) {
        setState({ initializing: false, user })
    }
  
    useEffect(() => {
        const unsubscribe = firebase.auth().onAuthStateChanged(onChange)
        return () => unsubscribe()
    }, [])
  
    return state
}
  