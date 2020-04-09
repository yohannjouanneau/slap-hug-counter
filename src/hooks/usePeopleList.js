import { useState, useEffect } from 'react';
import firebase from 'firebase/app';
import 'firebase/firestore';

export const usePeopleList = () => {
    const [loading, setLoading] = useState(true)
    const [peopleList, setPeopleList] = useState([])
    const [error, setError] = useState(false)

    useEffect(() => {
        const unsubscribe = firebase.firestore()
            .collection('users')
            .doc(firebase.auth().currentUser.uid)
            .collection("peoples")
            .onSnapshot(
                doc => {
                    var peoples = doc.docs.map(doc => {
                        return doc.data()
                    })
                    setLoading(false)
                    setPeopleList(peoples)
                },
                error => {
                    setError(error)
                }
            )
        return () => unsubscribe()
    }, [])

    return {
        loading,
        peopleList,
        error
    }
}
