import React from 'react';
import './PeopleList.css';
import { usePeopleList } from '../hooks/usePeopleList';
import PeopleItem from './PeopleItem'

const PeopleList = () => {

    const { loading, peopleList, error } = usePeopleList()

    return (
        <div className="PeopleList-container">
            {peopleList.map( (people, index) => {
                return <PeopleItem key={index} people={people} />
            })}
        </div>
    )
}

export default PeopleList