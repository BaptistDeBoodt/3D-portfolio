import { RigidBody } from '@react-three/rapier';
import { useRef } from 'react';
import { useGLTF } from '@react-three/drei';

const TreeThree = () => {


    const treeThreeRef = useRef();
    const { scene: treeThreeScene } = useGLTF('../floorPlan/treeThree/tree3.gltf');


    return (
        <>
            <RigidBody
                ref={treeThreeRef}
                type="fixed"
                colliders="cuboid"
                position={[0, 0, 0]}
            >
                <primitive object={treeThreeScene} castShadow />
            </RigidBody>
        </>
    );
}

useGLTF.preload('../floorPlan/treeThree/tree3.gltf');


export default TreeThree;