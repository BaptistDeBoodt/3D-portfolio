import { RigidBody } from '@react-three/rapier';
import { useRef } from 'react';
import { useGLTF } from '@react-three/drei';

const Mainfloor = () => {


    const mainFloorRef = useRef();
    const { scene: mainFloorScene } = useGLTF('../inside/main/inside.gltf');


    return (
        <>
            <RigidBody
                ref={mainFloorRef}
                type="fixed"
                colliders="trimesh"
                position={[0, -2, 0]}
            >
                <primitive object={mainFloorScene} receiveShadow/>
            </RigidBody>
        </>
    );
}

useGLTF.preload('../inside/main/inside.gltf');


export default Mainfloor;