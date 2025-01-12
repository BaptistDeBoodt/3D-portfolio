import { RigidBody } from '@react-three/rapier';
import { useRef } from 'react';
import { useGLTF } from '@react-three/drei';

const TreeTwo = () => {


    const treeTwoRef = useRef();
    const { scene: treeTwoScene } = useGLTF('../floorPlan/treeTwo/tree2.gltf');


    return (
        <>
            <RigidBody
                ref={treeTwoRef}
                type="fixed"
                colliders="cuboid"
                position={[0, 0, 0]}
            >
                <primitive object={treeTwoScene} castShadow />
            </RigidBody>
        </>
    );
}

useGLTF.preload('../floorPlan/treeTwo/tree2.gltf');


export default TreeTwo;