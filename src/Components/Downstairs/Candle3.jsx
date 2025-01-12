import React, { useState } from 'react';
import { useLoader } from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

const Candle3 = ({ onClick }) => {
  const cabinet3 = useLoader(GLTFLoader, '/downstairs/cabinet5.glb');
  const candle3 = useLoader(GLTFLoader, '/downstairs/Candle3.glb');

  const handlePointerOver = (event) => {
    document.body.style.cursor = 'pointer';
  };

  const handlePointerOut = (event) => {
    document.body.style.cursor = 'auto';
  };

  return (
    <>
      <mesh
        position={[2, -1.65, 5]}
        rotation={[0, 4, 0]}
        onPointerOver={handlePointerOver}
        onPointerOut={handlePointerOut}
        onClick={() => {
          if (onClick) {
            onClick('Candle3');
          }
        }}
      >
        <primitive object={cabinet3.scene} scale={6} />
      </mesh>

      <mesh
        position={[2.1, 0.25, 4.2]}
        rotation={[0, 3.1, 0]}
        onPointerOver={handlePointerOver}
        onPointerOut={handlePointerOut}
        onClick={() => {
          if (onClick) {
            onClick('Candle3');
          }
        }}
        >
        <primitive object={candle3.scene} scale={3} />
      </mesh>
    </>
  );
};

export default Candle3;