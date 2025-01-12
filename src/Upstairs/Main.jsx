import React, { useState, useEffect } from 'react';
import { Canvas } from '@react-three/fiber';
import { Physics } from '@react-three/rapier';
import StaticCamera from '../Components/Inside/Camera/StaticCamera';
import InsideHouse from './InsideHouse';
import RugInterface from './interfaces/rugInterface';
import GhostInterface from './interfaces/GhostInterface';
import SkullInterface from './interfaces/SkullInterface';
import ChandelierInterface from './interfaces/ChandelierInterface';
import BookInterface from './interfaces/BookInterface';
import VinylInterface from './interfaces/VinylInterface';
import DoorInterface from './interfaces/DoorInterface';
import ReaperInterface from './interfaces/ReaperInterface';
import ZombieInterface from './interfaces/ZombieInterface';
import { OrbitControls } from '@react-three/drei';

const Main = () => {
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
                    <InsideHouse onObjectClick={handleObjectClick} />
                    <StaticCamera />
                </Physics>
            </Canvas>

            {activeObject === 'Rug' && (
                <div className={`interface ${fadeIn ? 'fade-in' : 'fade-out'}`}>
                    <RugInterface />
                </div>
            )}
            {activeObject === 'Ghost' && (
                <div className={`interface ${fadeIn ? 'fade-in' : 'fade-out'}`}>
                    <GhostInterface />
                </div>
            )}
            {activeObject === 'Skull' && (
                <div className={`interface ${fadeIn ? 'fade-in' : 'fade-out'}`}>
                    <SkullInterface />
                </div>
            )}
            {activeObject === 'Chandelier' && (
                <div className={`interface ${fadeIn ? 'fade-in' : 'fade-out'}`}>
                    <ChandelierInterface />
                </div>
            )}
            {activeObject === 'Book' && (
                <div className={`interface ${fadeIn ? 'fade-in' : 'fade-out'}`}>
                    <BookInterface />
                </div>
            )}
            {activeObject === 'Vinyl' && (
                <div className={`interface ${fadeIn ? 'fade-in' : 'fade-out'}`}>
                    <VinylInterface />
                </div>
            )}
            {activeObject === 'Door' && (
                <div className={`interface ${fadeIn ? 'fade-in' : 'fade-out'}`}>
                    <DoorInterface />
                </div>
            )}
            {activeObject === 'Reaper' && (
                <div className={`interface ${fadeIn ? 'fade-in' : 'fade-out'}`}>
                    <ReaperInterface />
                </div>
            )}
            {activeObject === 'Zombie' && (
                <div className={`interface ${fadeIn ? 'fade-in' : 'fade-out'}`}>
                    <ZombieInterface />
                </div>
            )}
        </>
    );
};

export default Main;
