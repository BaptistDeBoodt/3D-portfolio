import React from 'react';
import { OrbitControls } from '@react-three/drei';
import { Physics } from '@react-three/rapier';
import Downstairs from './Downstairs'
import Camera from '../Components/Inside/Camera/Camera';
import StaticCamera from '../Components/Inside/Camera/StaticCamera';
import { Canvas } from '@react-three/fiber';
import { useState } from 'react';
import DoorInterface from './interfaces/DoorInterface';
import PianoInterface from './interfaces/PianoInterface';
import Candle1Interface from './interfaces/Candle1Interface';
import Candle2Interface from './interfaces/Candle2Interface';
import Candle3Interface from './interfaces/Candle3Interface';


const Down = () => {
    const [activeObject, setActiveObject] = useState(null); // Track which object is active
        const [fadeIn, setFadeIn] = useState(false);
    
        const handleObjectClick = (objectName) => {
            setFadeIn(false); // Trigger fade-out for current interface
            setTimeout(() => {
                setActiveObject(objectName); // Update active object when clicked
                setFadeIn(true); // Trigger fade-in for new interface
            }, 300); // Match fade-out animation duration
        };

    return (
        <>
        <Canvas shadows camera={{ fov: 45, near: 0.1, far: 200, position: [7, 2, 17] }}>
            <Physics>
                <Downstairs onObjectClick={handleObjectClick}/>
                <StaticCamera /> 
            </Physics>
        </Canvas>
        {activeObject === 'Door2' && (
            <div className={`interface ${fadeIn ? 'fade-in' : 'fade-out'}`}>
                <DoorInterface />
            </div>
        )}
        {activeObject === 'Piano' && (
            <div className={`interface ${fadeIn ? 'fade-in' : 'fade-out'}`}>
                <PianoInterface />
            </div>
        )}
        {activeObject === 'Candle1' && (
            <div className={`interface ${fadeIn ? 'fade-in' : 'fade-out'}`}>
                <Candle1Interface />
            </div>
        )}
        {activeObject === 'Candle2' && (
            <div className={`interface ${fadeIn ? 'fade-in' : 'fade-out'}`}>
                <Candle2Interface />
            </div>
        )}
        {activeObject === 'Candle3' && (
            <div className={`interface ${fadeIn ? 'fade-in' : 'fade-out'}`}>
                <Candle3Interface />
            </div>
        )}
        </>
    );
};

export default Down;