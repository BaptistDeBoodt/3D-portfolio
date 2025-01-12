import React, { useState } from 'react';
import { useLoader } from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

const Candle1 = ({ onClick }) => {
  const cabinet1 = useLoader(GLTFLoader, '/downstairs/cabinet3.glb');
  const candle1 = useLoader(GLTFLoader, '/downstairs/Candle1.glb');

  const handlePointerOver = (event) => {
    document.body.style.cursor = 'pointer';
  };

  const handlePointerOut = (event) => {
    document.body.style.cursor = 'auto';
  };

  return (
    <>
      <mesh
        position={[3, -1.65, -3.7]}
        rotation={[0, 3.1, 0]}
        onPointerOver={handlePointerOver}
        onPointerOut={handlePointerOut}
        onClick={() => {
          if (onClick) {
            onClick('Candle1');
          }
        }}
      >
        <primitive object={cabinet1.scene} scale={6} />
      </mesh>

      <mesh
        position={[3.7, 0.25, -4.2]}
        rotation={[0, 3.1, 0]}
        onPointerOver={handlePointerOver}
        onPointerOut={handlePointerOut}
        onClick={() => {
          if (onClick) {
            onClick('Candle1');
          }
        }}
        >
        <primitive object={candle1.scene} scale={3} />
      </mesh>
    </>
  );
};

export default Candle1;