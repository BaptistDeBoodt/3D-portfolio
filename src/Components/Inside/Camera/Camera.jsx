import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { PerspectiveCamera } from '@react-three/drei';
import { useControls } from 'leva'; // Import Leva

const Camera = () => {
    const cameraRef = useRef(); // Reference to the camera

    // Leva controls for camera position, rotation, and zoom
    const {
        cameraPositionX,
        cameraPositionY,
        cameraPositionZ,
        cameraRotationX,
        cameraRotationY,
        cameraRotationZ,
        cameraZoom,
    } = useControls({
        cameraPositionX: { value: 4.2, min: -10, max: 20, step: 0.1 },
        cameraPositionY: { value: 2.2, min: 0, max: 10, step: 0.1 },
        cameraPositionZ: { value: 0, min: -10, max: 30, step: 0.1 },
        cameraRotationX: { value: -0.2, min: -Math.PI, max: Math.PI, step: 0.01 },
        cameraRotationY: { value: 1.62, min: -Math.PI, max: Math.PI, step: 0.01 },
        cameraRotationZ: { value: 0.17, min: -Math.PI, max: Math.PI, step: 0.01 },
        cameraZoom: { value: 2.3, min: 0.5, max: 3, step: 0.1 },
    });

    useFrame(() => {
        if (cameraRef.current) {
            // Update camera position, rotation, and zoom with Leva control values
            cameraRef.current.position.set(cameraPositionX, cameraPositionY, cameraPositionZ);
            cameraRef.current.rotation.set(cameraRotationX, cameraRotationY, cameraRotationZ);
            cameraRef.current.zoom = cameraZoom;
            cameraRef.current.updateProjectionMatrix(); // Important: Recalculate the camera's projection matrix after changing zoom
        }
    });

    return (
        <PerspectiveCamera
            ref={cameraRef}
            makeDefault // Makes this the default camera for the scene
            fov={75}
            position={[cameraPositionX, cameraPositionY, cameraPositionZ]}
        />
    );
};

export default Camera;
