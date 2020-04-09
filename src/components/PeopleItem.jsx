import React from 'react';
import './PeopleItem.css';
import slap from '../assets/slap_fix.gif'
import hug from '../assets/hug_fix.gif'

const PeopleItem = ({ people }) => {

    return (
        <div className="PeopleItem-container">
            <div className="PeopleItem-name">{people.name}</div>

            <div className="PeopleItem-slap-count">{people.slapCount}</div>
            <img className="PeopleItem-slap-count-icon" src={slap} alt="slap count" />

            <div className="PeopleItem-hug-count">{people.hugCount}</div>
            <img className="PeopleItem-hug-count-icon" src={hug} alt="slap count" />

        </div>
    )
}

export default PeopleItem