import React from 'react';
import { Physics } from '@react-three/rapier';
import Platform from './Platform.jsx';
import FirstPerson from './FirstPerson.jsx'
import { OrbitControls } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import Interface from './Interface.jsx';
import { useEffect, useRef, useState } from 'react';

const Intro = () => {
        const [showInterface, setShowInterface] = useState(true);
        const [fadeOut, setFadeOut] = useState(false);
        const interfaceRef = useRef();
    
        const handleClickOutside = (event) => {
            if (interfaceRef.current && !interfaceRef.current.contains(event.target)) {
                setFadeOut(true); // Trigger fade-out
                setTimeout(() => setShowInterface(false), 300); // Wait for animation to finish
            }
        };
    
        useEffect(() => {
            document.addEventListener('mousedown', handleClickOutside);
            return () => {
                document.removeEventListener('mousedown', handleClickOutside);
            };
        }, []);

    return (
        <>
            <Canvas shadows camera={{ fov: 45, near: 0.1, far: 200, position: [7, 2, 17] }}>
                {/* <OrbitControls /> */}
            <directionalLight castShadow position={[1, 2, 3]} intensity={0.1} />
                <ambientLight intensity={0.1} />
                

                {/* debug */}
                <Physics>
                    <Platform />
                    <FirstPerson />
                </Physics> 
            </ Canvas>
            {showInterface && (
                <div
                    ref={interfaceRef}
                    className={`interface ${fadeOut ? 'fade-out' : ''}`} // Add fade-out class
                >
                    <Interface />
                </div>
            )}
        </>
    );
};

export default Intro;