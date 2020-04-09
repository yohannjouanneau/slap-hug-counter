import React, { useState, useRef } from 'react';
import './AddPeople.css';
import { useCreatePeople } from '../hooks/useCreatePeople';

const AddPeople = () => {

    const [peopleName, setPeopleName] = useState("")
    const {loading, peopleCreated, error} = useCreatePeople(peopleName)
    const nameField = useRef(null)

    const AddPeople = () => {
        setPeopleName(nameField.current.value)
    }

    console.log("AddPeople render " + peopleCreated)
    if (peopleCreated) {
        nameField.current.value = ""
    }

    return (
        <div>
            <input className="AddPeople-input-text" ref={nameField} type="text" />
            <button className="AddPeople-button" onClick={AddPeople}>Add</button>
        </div>
    )
}

export default AddPeople

