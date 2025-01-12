import React, { useRef, useEffect } from 'react';
import { useLoader, useThree } from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { RigidBody } from '@react-three/rapier';
import { SpotLightHelper } from 'three';

const Danger = () => {
    const car = useLoader(GLTFLoader, '/floorPlan/car/Old Car.glb');
    const spotLightRef = useRef();


    return (
        <>
            <RigidBody type="fixed" colliders="cuboid">
                <mesh position={[7, 0.75, 18.7]} rotation={[0, -1.2, 0]}>
                    <primitive object={car.scene} scale={0.25} />
                </mesh>
            </RigidBody>

            <spotLight ref={spotLightRef} castShadow position={[7, 1.3, 18.5]} rotateZ={1} intensity={5} />
        </>
    );
};

export default Danger;