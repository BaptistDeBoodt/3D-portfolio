import React, { useState } from 'react';
import { useLoader } from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

const Door = ({ onClick }) => {
  const door = useLoader(GLTFLoader, '/inside/Door.glb');

  const handlePointerOver = (event) => {
    document.body.style.cursor = 'pointer';
  };

  const handlePointerOut = (event) => {
    document.body.style.cursor = 'auto';
  };

  return (
    <>
      <mesh
        position={[0, -1.6, -4.8]}
        onClick={() => {
          console.log('Door clicked!');
          if (onClick) {
            onClick('Door');
          }
        }}
        onPointerOver={handlePointerOver}
        onPointerOut={handlePointerOut}
      >
        <primitive object={door.scene} scale={1.7} />
      </mesh>
    </>
  );
};

export default Door;