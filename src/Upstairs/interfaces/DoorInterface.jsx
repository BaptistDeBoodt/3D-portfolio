import React from 'react';
import { useNavigate } from 'react-router-dom';

const DoorInterface = () => {
    const navigate = useNavigate();

    const handleClick = () => {
        console.log('Door clicked!');
        navigate('/');
    };


    return (
        <div className='interface'>
            <h1>Door</h1>
            <p>
                By clicking on the door, you are able to leave the house.
                Are you sure you want to leave?
            </p>
            <button onClick={handleClick}>Yes</button>
        </div>
    );
};

export default DoorInterface;