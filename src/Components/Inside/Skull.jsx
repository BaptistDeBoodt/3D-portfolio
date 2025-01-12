import React, { useState, useRef } from 'react';
import { useLoader, useFrame } from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

const Skull = ({ onClick }) => {
  const table2 = useLoader(GLTFLoader, '/inside/cabinet2.glb');
  const machete = useLoader(GLTFLoader, '/inside/Machete.glb');
  const skull = useLoader(GLTFLoader, '/inside/Skull.glb');

  const macheteRef = useRef();
  const [isMacheteVisible, setIsMacheteVisible] = useState(true); // Visibility state
  const [falling, setFalling] = useState(false); // Falling state
  const [velocityY, setVelocityY] = useState(0); // Vertical velocity
  const targetY = 1; // Target Y position where the machete will stop
  const initialVelocity = -0.4; // Initial velocity (shooting down quickly)
  const damping = 0.99; // Damping factor to slow down the fall (air resistance)

  const knife = new Audio('/audio/knife.mp3');

  // Pointer events for the cursor
  const handlePointerOver = () => {
    document.body.style.cursor = 'pointer';
  };

  const handlePointerOut = () => {
    document.body.style.cursor = 'auto';
  };

  const handleClick = () => {
    knife.play();

    if (falling) return;

    if (isMacheteVisible) {
      setVelocityY(initialVelocity); // Start with high initial velocity
      setFalling(true); // Start falling when clicked
    } else {
      setIsMacheteVisible(!isMacheteVisible); // Hide the machete if already fallen
    }
  };

  // Animate machete shooting down with velocity and damping
  useFrame(() => {
    if (falling) {
      if (macheteRef.current.position.y > targetY) {
        macheteRef.current.position.y += velocityY; // Apply velocity to move down
        setVelocityY((prev) => prev * damping); // Apply damping to slow the fall
      } else {
        macheteRef.current.position.y = targetY; // Stop at target Y position
        setFalling(false); // Stop the falling animation
      }
    }
  });

  return (
    <>
      {/* Machete */}
      {isMacheteVisible && (
        <mesh
          ref={macheteRef}
          position={[-4.5, 10, 3.25]} // Initial position
          rotation={[3.15, 0, 0]}
          onPointerOver={handlePointerOver}
          onPointerOut={handlePointerOut}
        >
          <primitive object={machete.scene} scale={4} />
          <pointLight color="red" intensity={5} distance={2} decay={2} />
        </mesh>
      )}

      {/* Skull */}
      <mesh
        position={[-4.4, -0.1, 3.25]}
        rotation={[0, 1.6, 0]}
        onPointerOver={handlePointerOver}
        onPointerOut={handlePointerOut}
        onClick={() => {
          console.log('Skull clicked!');

          // Trigger both animation and interface
          handleClick(); // Handle the machete fall
          if (onClick) {
            onClick('Skull'); // Trigger the interface through the onClick prop
          }
        }}
      >
        <primitive object={skull.scene} scale={1} />
      </mesh>

      {/* Table */}
      <mesh
        position={[-3.8, -1.65, 4]}
        rotation={[0, -1.6, 0]}
        onPointerOver={handlePointerOver}
        onPointerOut={handlePointerOut}
        onClick={handleClick}
      >
        <primitive object={table2.scene} scale={6} />
      </mesh>
    </>
  );
};

export default Skull;
