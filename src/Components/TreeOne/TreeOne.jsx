import { RigidBody, CuboidCollider } from '@react-three/rapier';
import { useRef } from 'react';
import { useGLTF } from '@react-three/drei';

const TreeOne = () => {


    const treeOneRef = useRef();
    const { scene: treeOneScene } = useGLTF('../floorPlan/treeOne/tree1.gltf');


    return (
        <>
            <RigidBody
                ref={treeOneRef}
                type="fixed"
                colliders="hull"
                position={[0, 0, 0]}
            >
                <primitive object={treeOneScene} castShadow />
            </RigidBody>
        </>
    );
}

useGLTF.preload('../floorPlan/treeOne/tree1.gltf');


export default TreeOne;