import { RigidBody } from '@react-three/rapier';
import { useRef } from 'react';
import { useGLTF } from '@react-three/drei';

const Platform = () => {


    const landBottomRef = useRef();
    const { scene: landBottomScene } = useGLTF('./floorPlan/bottom/grass.gltf');

    return (
        <>
            <RigidBody
                ref={landBottomRef}
                type="fixed"
                position={[0, 0, 0]}
            >
                <primitive object={landBottomScene} receiveShadow/>
            </RigidBody>
        </>
    );
}

// Vergeet niet het GLTF-bestand correct te importeren
useGLTF.preload('./floorPlan/bottom/grass.gltf');


export default Platform;