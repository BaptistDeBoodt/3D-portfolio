import React, { useState } from 'react';
import { useLoader, useFrame } from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

const Vinyl = ({ onClick }) => {
  const table = useLoader(GLTFLoader, '/inside/cabinet.glb');
  const vinyl = useLoader(GLTFLoader, '/inside/Gramophone.glb');
    
  const sound = new Audio('/audio/vinyl.mp3');

  const handleClick = () => {
    sound.play();
  };

  const handlePointerOver = (event) => {
    document.body.style.cursor = 'pointer';
  };

  const handlePointerOut = (event) => {
    document.body.style.cursor = 'auto';
  };

    return (
        <>
        <mesh
            position={[3.9, 0.35, -4.3]}
            rotation={[0, -1.6, 0]}
            onClick={() => {
              console.log('Vinyl clicked!');
              handleClick();
              if (onClick) {
                onClick('Vinyl');
              }
            }}
            onPointerOver={handlePointerOver}
            onPointerOut={handlePointerOut}
        >
            <primitive object={vinyl.scene} scale={2} />
        </mesh>

      <mesh
        position={[3, -1.65, -3.7]}
        rotation={[0, 3.1, 0]}
        onClick={() => {
          console.log('Vinyl clicked!');
          handleClick();
          if (onClick) {
            onClick('Vinyl');
          }
        }}
        onPointerOver={handlePointerOver}
        onPointerOut={handlePointerOut}
      >
        <primitive object={table.scene} scale={6} />
      </mesh>
    </>
    );
};

export default Vinyl;