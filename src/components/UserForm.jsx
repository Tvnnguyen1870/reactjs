import React from "react";
import { useState } from 'react';
const  UserForm = ({onEnter}) => {
    const[name1, setName1] = useState('');

    const handleInputChange = (e) => {
        setName1(e.target.value);
    }

    const handleSubmit = () => {
        onEnter(name1)
    }
    
    return (
        <div>
            Name: <input type="text" value={name1} placeholder="please enter name" onChange={handleInputChange}/>
            <button onClick={handleSubmit}>Enter</button>
        </div>
    )
}

export default UserForm;