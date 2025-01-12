import React, { useState } from 'react';
import { useLoader } from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

const Candle2 = ({ onClick }) => {
  const cabinet2 = useLoader(GLTFLoader, '/downstairs/cabinet4.glb');
  const candle2= useLoader(GLTFLoader, '/downstairs/Candle2.glb');

  const handlePointerOver = (event) => {
    document.body.style.cursor = 'pointer';
  };

  const handlePointerOut = (event) => {
    document.body.style.cursor = 'auto';
  };

  return (
    <>
      <mesh
        position={[-3.8, -1.65, 4]}
        rotation={[0, -1.6, 0]}
        onPointerOver={handlePointerOver}
        onPointerOut={handlePointerOut}
        onClick={() => {
          if (onClick) {
            onClick('Candle2');
          }
        }}
      >
        <primitive object={cabinet2.scene} scale={6} />
      </mesh>

      <mesh
        position={[-4.4, 0.25, 3.3]}
        rotation={[0, -1.6, 0]}
        onPointerOver={handlePointerOver}
        onPointerOut={handlePointerOut}
        onClick={() => {
          if (onClick) {
            onClick('Candle2');
          }
        }}
        >
        <primitive object={candle2.scene} scale={3} />
      </mesh>
    </>
  );
};

export default Candle2;