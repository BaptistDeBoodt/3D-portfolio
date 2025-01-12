import React, { useState } from 'react';
import { useLoader } from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { RigidBody } from '@react-three/rapier';

const Danger = () => {
    const barricade = useLoader(GLTFLoader, '/floorPlan/barricade/Barrier Fixed.glb');
    const signOne = useLoader(GLTFLoader, '/floorPlan/barricade/woodSign.glb');
    const signTwo = useLoader(GLTFLoader, '/floorPlan/barricade/woodSignTwo.glb');

    // Audio files
    const gate = new Audio('/audio/gate.mp3');
    const wind = new Audio('/audio/wind.mp3');
    const scream = new Audio('/audio/scream.mp3');

    // State to track if audio is playing
    const [isAudioPlaying, setIsAudioPlaying] = useState(false);

    // Handle click and audio playing
    const handleClick = (audio) => {
        if (isAudioPlaying) return;
        setIsAudioPlaying(true);
        audio.play();
        audio.onended = () => {
            setIsAudioPlaying(false);
        };
    };

    const handlePointerOver = () => {
            document.body.style.cursor = 'pointer';
    };

    const handlePointerOut = () => {
            document.body.style.cursor = 'auto';
    };

    return (
        <>
            <RigidBody type="fixed" colliders="cuboid">
                <mesh
                    position={[7, 0.5, 14]}
                    rotation={[0, 0.3, 0]}
                    onPointerOver={handlePointerOver}
                    onPointerOut={handlePointerOut}
                    onClick={() => handleClick(gate)}
                >
                    <primitive object={barricade.scene} scale={0.45} />
                </mesh>
            </RigidBody>

            <RigidBody type="fixed" colliders="cuboid">
                <mesh
                    position={[-3, 0.25, 3]}
                    rotation={[-0.2, -0.8, 0]}
                    onPointerOver={handlePointerOver}
                    onPointerOut={handlePointerOut}
                    onClick={() => handleClick(wind)}
                >
                    <primitive object={signOne.scene} scale={0.3} />
                </mesh>
            </RigidBody>

            <RigidBody type="fixed" colliders="cuboid">
                <mesh
                    position={[-2.5, 0, -4]}
                    rotation={[-0.2, 0.8, 0]}
                    onPointerOver={handlePointerOver}
                    onPointerOut={handlePointerOut}
                    onClick={() => handleClick(scream)}
                >
                    <primitive object={signTwo.scene} scale={0.3} />
                </mesh>
            </RigidBody>

            <pointLight castShadow position={[-3, 0.25, 3.5]} intensity={5} />
            <pointLight castShadow position={[-2.5, 0, -3.5]} intensity={5} />
        </>
    );
};

export default Danger;
