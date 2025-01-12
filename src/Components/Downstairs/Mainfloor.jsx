import { RigidBody } from '@react-three/rapier';
import { useRef } from 'react';
import { useGLTF } from '@react-three/drei';

const Mainfloor = () => {


    const downFloorRef = useRef();
    const { scene: downFloorScene } = useGLTF('../downstairs/main/down.gltf');


    return (
        <>
            <RigidBody
                ref={downFloorRef}
                type="fixed"
                colliders="trimesh"
                position={[0, -2, 0]}
            >
                <primitive object={downFloorScene} receiveShadow/>
            </RigidBody>
        </>
    );
}

useGLTF.preload('../downstairs/main/down.gltf');


export default Mainfloor;