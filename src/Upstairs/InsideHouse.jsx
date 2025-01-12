import React, { useEffect } from 'react';
import Mainfloor from '../Components/Inside/Mainfloor';
import Zombie from '../Components/Inside/Zombie';
import Rug from '../Components/Inside/Rug';
import Reaper from '../Components/Inside/Reaper.jsx';
import Vinyl from '../Components/Inside/Vinyl.jsx';
import Chandelier from '../Components/Inside/Chandelier.jsx';
import Door from '../Components/Inside/Door.jsx';
import Ghost from '../Components/Inside/Ghost.jsx';
import Skull from '../Components/Inside/Skull.jsx';
import Book from '../Components/Inside/Book.jsx';

const InsideHouse = ({ onObjectClick }) => {
    const audio = new Audio('/audio/house.mp3');
    const loop = new Audio('/audio/ravenville.mp3');

    useEffect(() => {
        audio.play();
        loop.loop = true; 
        loop.play();

        return () => {
            audio.pause();
            audio.currentTime = 0;
            loop.pause();
            loop.currentTime = 0;
        };
    }, []);

    return (
        <> 
            <Mainfloor />
            <Zombie onClick={() => onObjectClick('Zombie')} />
            <Rug onClick={() => onObjectClick('Rug')} />
            <Reaper onClick={() => onObjectClick('Reaper')} />
            <Vinyl onClick={() => onObjectClick('Vinyl')} />
            <Chandelier onClick={() => onObjectClick('Chandelier')} />
            <Door onClick={() => onObjectClick('Door')} />
            <Ghost onClick={() => onObjectClick('Ghost')} />
            <Skull onClick={() => onObjectClick('Skull')} />
            <Book onClick={() => onObjectClick('Book')} />
        </>
    );
};

export default InsideHouse;
