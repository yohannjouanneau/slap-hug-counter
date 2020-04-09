import { useState, useEffect } from 'react';
import firebase from 'firebase/app';
import 'firebase/firestore';

export const useCreatePeople = (peopleName) => {
    const [loading, setLoading] = useState(true)
    const [peopleCreated, setPeopleCreated] = useState(false)
    const [error, setError] = useState(false)

    useEffect(() => {
        if (peopleName !== "") {
            firebase.firestore()
                .collection('users')
                .doc(firebase.auth().currentUser.uid)
                .collection("peoples")
                .doc().set({
                    name: peopleName,
                    slapCount: 0,
                    hugCount: 0
                }).then(() => {
                    setLoading(false)
                    setPeopleCreated(true)
                }).catch(err => {
                    setError(err)
                })
        }
    }, [peopleName])

    return {
        loading,
        peopleCreated,
        error
    }
}
