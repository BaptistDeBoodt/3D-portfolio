import { RigidBody } from '@react-three/rapier';
import { useRef, useState } from 'react';
import { useGLTF, useCursor } from '@react-three/drei';
import { useNavigate } from 'react-router-dom';


const Mansion = () => {
    const mansionRef = useRef();
    const { scene: mansionScene } = useGLTF('../floorPlan/mansion/gjostMansion.gltf');

    const [hovered, setHovered] = useState(false);

    const navigate = useNavigate();

    const navigation = () => {
        navigate('/main')
    }

    // Use the useCursor hook to change the cursor style when hovering
    useCursor(hovered);

    return (
        <>
            <RigidBody
                ref={mansionRef}
                type="fixed"
                colliders="trimesh"
                position={[0, 0, 0]}
                onPointerOver={() => setHovered(true)}  // Trigger cursor change on hover
                onPointerOut={() => setHovered(false)}  // Reset cursor when not hovering
                onClick={navigation}
            >
                <primitive object={mansionScene} castShadow />
            </RigidBody>

            <pointLight castShadow position={[-4, 1.5, -10]} intensity={5} />
        </>
    );
}

useGLTF.preload('../floorPlan/mansion/gjostMansion.gltf');

export default Mansion;
