import React, { useState } from 'react';

const PersonCard = (props) => {
    const { firstName, lastName, hairColor } = props
    const [age, setAge] = useState(props.age)

    const incrementAge = () => setAge(age + 1)
    
    return(
        <div>
            <h2>{ lastName }, { firstName }</h2>
            <p>Age: { age }</p>
            <p>Hair Color: { hairColor }</p>
            <button onClick={ incrementAge }>Birthday Button for { firstName } { lastName }</button>
        </div>
    )
}

export default PersonCard