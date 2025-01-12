import React, { useRef, useEffect } from 'react';
import { useLoader, useFrame } from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { AnimationMixer } from 'three';
import * as THREE from 'three';

const Zombie = ({ onClick }) => {
  // Load the zombie model
  const zombie = useLoader(GLTFLoader, '/inside/Zombie.glb');

  const sound = new Audio('/audio/zombie.mp3');

  // Create a ref for the mixer
  const mixer = useRef();

  const handleClick = () => {
    sound.play();
  };

  const handlePointerOver = (event) => {
    document.body.style.cursor = 'pointer';
  };

  const handlePointerOut = (event) => {
    document.body.style.cursor = 'auto';
  };

  useEffect(() => {
    if (zombie.animations && zombie.animations.length > 0) {
      // Initialize the animation mixer for the zombie scene
      mixer.current = new AnimationMixer(zombie.scene);

      // Get the first animation
      const firstAnimation = zombie.animations[1];

      // Play the first animation in a loop
      const action = mixer.current.clipAction(firstAnimation);
      action.play();
      action.setLoop(THREE.LoopRepeat, Infinity); // Set to loop infinitely
    }

    return () => {
      // Clean up the mixer when the component is unmounted
      if (mixer.current) {
        mixer.current.stopAllAction();
      }
    };
  }, [zombie]);

  // Update the mixer on every frame
  useFrame((state, delta) => {
    if (mixer.current) {
      mixer.current.update(delta);
    }
  });

  return (
    <mesh
      position={[-4, -1.7, -4]}
      rotation={[0, 0.5, 0]}
      onPointerOver={handlePointerOver}
      onPointerOut={handlePointerOut}
      onClick={() => {
        console.log('Zombie clicked!');
        handleClick();
        if (onClick) {
          onClick('Zombie');
        }
      }}
    >
      <primitive object={zombie.scene} scale={0.8} />
    </mesh>
  );
};

export default Zombie;
