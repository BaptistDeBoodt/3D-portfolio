import React, { useRef, useEffect, useState } from 'react';
import { PerspectiveCamera } from '@react-three/drei';
import { useFrame, useThree } from '@react-three/fiber';
import * as THREE from 'three';
import { RigidBody } from '@react-three/rapier';
import { useGLTF } from '@react-three/drei';

const FirstPerson = () => {
    const cameraRef = useRef();
    const { scene } = useThree();

    const TREE_HEIGHT_LIMIT = 1;
    const ROTATION_SENSITIVITY = 0.9;
    const MOVE_SPEED = 0.06;
    const ROTATION_DAMPING = 0.1;

    const [mouse, setMouse] = useState({ x: 0 });
    const [target, setTarget] = useState(null);
    const [canMove, setCanMove] = useState(false);

    // Load the dirt road model
    const roadRef = useRef();
    const { scene: roadScene } = useGLTF('./floorPlan/bottom/dirtroad.gltf');
    
    useGLTF.preload('./floorPlan/bottom/dirtroad.gltf');

    // Function to handle mouse movement
    useEffect(() => {
        const handleMouseMove = (event) => {
            const x = (event.clientX / window.innerWidth) * 2 - 1;
            setMouse({ x });
        };

        // Function to handle clicks
        const handleSceneClick = (event) => {
            const x = (event.clientX / window.innerWidth) * 2 - 1;
            const y = -(event.clientY / window.innerHeight) * 2 + 1;

            const raycaster = new THREE.Raycaster();
            raycaster.setFromCamera(new THREE.Vector2(x, y), cameraRef.current);
            const intersects = raycaster.intersectObjects(roadScene.children, true);  // Check only dirt road meshes

            if (intersects.length > 0) {
                const clickedPoint = intersects[0].point;

                // If clicked on the dirt road, allow movement
                setTarget(new THREE.Vector3(
                    clickedPoint.x,
                    Math.min(clickedPoint.y + 0.5, TREE_HEIGHT_LIMIT),
                    clickedPoint.z
                ));
                setCanMove(true); // Allow movement on the road
            } else {
                // If clicked outside the dirt road, just rotate the camera
                const clickedPoint = new THREE.Vector3(
                    (x * window.innerWidth) / 2,
                    (y * window.innerHeight) / 2,
                    0
                );
                setTarget(clickedPoint);  // Only rotate the camera
                setCanMove(false); // Disable movement outside the road
            }
        };

        window.addEventListener('mousemove', handleMouseMove);
        window.addEventListener('click', handleSceneClick);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('click', handleSceneClick);
        };
    }, [scene, roadScene]);

    // Update the camera position based on the target
    useFrame(() => {
        if (!cameraRef.current) return;

        cameraRef.current.rotation.y = THREE.MathUtils.lerp(
            cameraRef.current.rotation.y,
            cameraRef.current.rotation.y - mouse.x * ROTATION_SENSITIVITY,
            ROTATION_DAMPING
        );

        if (target) {
            const position = cameraRef.current.position;
            const direction = new THREE.Vector3().subVectors(target, position);
            const distance = direction.length();

            if (distance > 0.1 && canMove) {
                const moveDistance = Math.min(MOVE_SPEED, distance);
                direction.normalize().multiplyScalar(moveDistance);
                position.add(direction);
                position.y = Math.min(position.y, TREE_HEIGHT_LIMIT);
            } else {
                setTarget(null);
            }
        }
    });

    return (
        <>
            <PerspectiveCamera
                ref={cameraRef}
                makeDefault
                position={[7.1, 1.2, 17]}
                fov={75}
            />

            <RigidBody
                ref={roadRef}
                type="fixed"
                position={[0, 0, 0]}
            >
                <primitive object={roadScene} receiveShadow />
            </RigidBody>
        </>
    );
};

export default FirstPerson;
