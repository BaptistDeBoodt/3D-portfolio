import React, { useState } from 'react';
import { useLoader } from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

const Door2 = ({ onClick }) => {
  const door = useLoader(GLTFLoader, '/downstairs/Door2.glb');

  const handlePointerOver = (event) => {
    document.body.style.cursor = 'pointer';
  };

  const handlePointerOut = (event) => {
    document.body.style.cursor = 'auto';
  };

  return (
    <>
      <mesh
        position={[-5, -1.7, 0]}
        rotation={[0, 1.6, 0]}
        onClick={() => {
          console.log('Door clicked!');
          if (onClick) {
            onClick('Doo2r');
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

export default Door2;