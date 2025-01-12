import React, { useState, useEffect } from 'react';
import { useLoader, useFrame } from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { PointLight } from 'three';
import * as THREE from 'three';

const Book = ({ onClick }) => {
  const book = useLoader(GLTFLoader, '/inside/ball3.glb');
  const [yPosition, setYPosition] = useState(3);
  const speed = 0.001; // Adjust speed to control hover speed
  const amplitude = 0.1; // Adjust the distance the rug hovers

  useEffect(() => {
    if (book.animations && book.animations.length > 0) {
      const mixer = new THREE.AnimationMixer(book.scene);
      const action = mixer.clipAction(book.animations[0]);
      action.play();
      const clock = new THREE.Clock();

      const animate = () => {
        const delta = clock.getDelta();
        mixer.update(delta);
        requestAnimationFrame(animate);
      };

      animate();
    }
  }, [book]);

  const handlePointerOver = () => {
    document.body.style.cursor = 'pointer';
  };

  const handlePointerOut = () => {
    document.body.style.cursor = 'auto';
  };

    const handleClick = () => {
        console.log('Book clicked');
    }



  useFrame(({ clock }) => {
    const time = clock.getElapsedTime();

    // Update Y position for hovering effect
    setYPosition(3 + Math.sin(Date.now() * speed) * amplitude);

    // Rotate the book around all axes
    book.scene.rotation.x = time * 0.5;
    book.scene.rotation.y = time * 0.5;
    book.scene.rotation.z = time * 0.5;
  });

  return (
    <>
      <pointLight 
        color={0xff00ff} 
        intensity={30} 
        distance={10} 
        position={[6, 3.5, 10]}
      />
      <mesh
        position={[6, yPosition, 9]}
        rotation={[0, 0, 0]}
        onClick={() => {
          console.log('Book clicked!');
          handleClick();
          if (onClick) {
            onClick('Book');
          }
        }}
        onPointerOver={handlePointerOver}
        onPointerOut={handlePointerOut} 
        >
        <primitive object={book.scene} scale={1} />
      </mesh>
    </>
  );
};

export default Book;
