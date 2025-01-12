import React, { useState } from 'react';
import { useLoader, useFrame } from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

const Rug = ({ onClick }) => {
  const rug = useLoader(GLTFLoader, '/inside/rug.glb');
  const [yPosition, setYPosition] = useState(-1.5);
  const speed = 0.001; // Adjust speed to control hover speed
  const amplitude = 0.1; // Adjust the distance the rug hovers

  useFrame(() => {
    setYPosition(-1.5 + Math.sin(Date.now() * speed) * amplitude);
  });

  const handlePointerOver = () => {
    document.body.style.cursor = 'pointer';
  };

  const handlePointerOut = () => {
    document.body.style.cursor = 'auto';
  };

  return (
    <mesh
      position={[0, yPosition, 0]}
      rotation={[0, 4.7, 0]}
      onPointerOver={handlePointerOver}
      onPointerOut={handlePointerOut}
      onClick={() => {
      console.log('Rug clicked!');
      if (onClick) onClick();
  }}
>
      <primitive object={rug.scene} scale={4} />
    </mesh>
  );
};

export default Rug;
