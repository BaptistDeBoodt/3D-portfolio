import React, { useRef, useEffect } from 'react';
import { useLoader, useFrame } from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import * as THREE from 'three';

const Player = () => {
  const player = useLoader(GLTFLoader, '/downstairs/Animated Zombie.glb');
  const mixer = useRef(null);

  useEffect(() => {
    if (player.animations.length > 2) {
      // Set up the animation mixer and play the third animation in a loop
      mixer.current = new THREE.AnimationMixer(player.scene);
      const action = mixer.current.clipAction(player.animations[2]); // Index 2 for the third animation
      action.loop = THREE.LoopRepeat; // Ensure it loops
      action.play();
    }

    return () => {
      if (mixer.current) mixer.current.stopAllAction();
    };
  }, [player]);

  useFrame((_, delta) => {
    if (mixer.current) mixer.current.update(delta);
  });

  return (
    <mesh position={[2.5, -1.6, -1]} rotation={[0, -1, 0]}>
      <primitive object={player.scene} scale={0.4} />
    </mesh>
  );
};

export default Player;
