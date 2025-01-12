import React, { useState, useRef } from 'react';
import { useLoader, useFrame } from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

const Ghost = ({ onClick }) => {
  const ghost = useLoader(GLTFLoader, '/inside/Ghoooooost.glb');
  const ghostRef = useRef();
  const radius = 6; // Radius of the circular path
  const speed = 0.01; // Speed of the rotation
  const [angle, setAngle] = useState(0); // Initial angle

  const ghostWhisper = new Audio('/audio/ghost.mp3');

  // Update the ghost's position every frame
  useFrame(() => {
    const newAngle = angle - speed; // Reverse the direction
    setAngle(newAngle);

    if (ghostRef.current) {
      ghostRef.current.position.x = Math.cos(newAngle) * radius;
      ghostRef.current.position.z = Math.sin(newAngle) * radius;
    }
  });

  const handleClick = () => {
    ghostWhisper.play();
  };

  const handlePointerOver = () => {
    document.body.style.cursor = 'pointer';
  };

  const handlePointerOut = () => {
    document.body.style.cursor = 'auto';
  };

  return (
    <mesh
      ref={ghostRef}
      position={[radius, 4, 0]}
      rotation={[0, Math.PI / 2, 0]}
      onPointerOver={handlePointerOver}
      onPointerOut={handlePointerOut}
      onClick={() => {
        handleClick();
        console.log('Rug clicked!');
        if (onClick) onClick();
    }}
    >
      <primitive object={ghost.scene} scale={1} />
      <pointLight
        color="white"
        intensity={1}
        distance={10}
        decay={2}
      />
    </mesh>
  );
};

export default Ghost;
