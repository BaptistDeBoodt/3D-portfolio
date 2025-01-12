import React, { useState, useRef } from 'react';
import { useLoader, useFrame, useThree } from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { PerspectiveCamera } from '@react-three/drei';

const Reaper = ({ onClick }) => {
  const { camera } = useThree();
  const reaperLeft = useLoader(GLTFLoader, '/inside/Scythe.glb');
  const reaperRight = useLoader(GLTFLoader, '/inside/Scythe2.glb');

  const initialRotationLeft = [2, Math.PI, 0];
  const initialRotationRight = [-2, 0, 0];

  const [rotationLeft, setRotationLeft] = useState(initialRotationLeft);
  const [rotationRight, setRotationRight] = useState(initialRotationRight);
  const [isSpinning, setIsSpinning] = useState(false);
  const [isZoomed, setIsZoomed] = useState(false);

  const targetCameraPosition = useRef(null);
  const sound = useRef(new Audio('/audio/reaper.mp3'));

  const handleClick = () => {
    setTimeout(() => {
      sound.current.play();
      setIsSpinning(true);
    }, 500);

    if (!isZoomed) {
      targetCameraPosition.current = { x: 4.2, y: 2.2, z: 0 };
      setIsZoomed(true);
    }
  };

  const handleBackgroundClick = () => {
    if (isZoomed) {
      targetCameraPosition.current = { x: 13, y: 5, z: 20.2 };
      setIsZoomed(false);
    }
  };

  const handlePointerOver = () => {
    document.body.style.cursor = 'pointer';
  };

  const handlePointerOut = () => {
    document.body.style.cursor = 'auto';
  };

  useFrame((state, delta) => {
    if (isSpinning) {
      setRotationLeft((prevRotation) => {
        const newRotation = [...prevRotation];
        newRotation[0] += delta * Math.PI * 2;
        if (newRotation[0] >= initialRotationLeft[0] + 2 * Math.PI) {
          newRotation[0] = initialRotationLeft[0];
          setIsSpinning(false);
        }
        return newRotation;
      });

      setRotationRight((prevRotation) => {
        const newRotation = [...prevRotation];
        newRotation[0] -= delta * Math.PI * 2;
        if (newRotation[0] <= initialRotationRight[0] - 2 * Math.PI) {
          newRotation[0] = initialRotationRight[0];
          setIsSpinning(false);
        }
        return newRotation;
      });
    }

    if (targetCameraPosition.current) {
      const { x, y, z } = targetCameraPosition.current;

      // Interpolate position
      camera.position.lerp({ x, y, z }, delta * 2);

      // Adjust rotation simultaneously for zoom-out
      const targetRotation = isZoomed ? [-0.2, 1.62, 0.17] : [-0.2, 0.59, 0.12];
      camera.rotation.x = camera.rotation.x + (targetRotation[0] - camera.rotation.x) * delta * 2;
      camera.rotation.y = camera.rotation.y + (targetRotation[1] - camera.rotation.y) * delta * 2;
      camera.rotation.z = camera.rotation.z + (targetRotation[2] - camera.rotation.z) * delta * 2;
    }
  });

  return (
    <>
      <mesh
        position={[0, 0, 0]}
        onClick={handleBackgroundClick}
        onPointerOver={handlePointerOver}
        onPointerOut={handlePointerOut}
      >
        <planeGeometry args={[100, 100]} />
        <meshBasicMaterial transparent opacity={0} />
      </mesh>

      <mesh
        position={[-4.9, 2, 0]}
        rotation={rotationRight}
        onClick={() => {
          console.log('Reaper clicked!');
          handleClick();
          if (onClick) {
            onClick('Reaper');
          }
        }}
        onPointerOver={handlePointerOver}
        onPointerOut={handlePointerOut}
      >
        <primitive object={reaperRight.scene} scale={0.8} />
      </mesh>

      <mesh
        position={[-4.9, 2, 0]}
        rotation={rotationLeft}
        onClick={() => {
          console.log('Reaper clicked!');
          handleClick();
          if (onClick) {
            onClick('Reaper');
          }
        }}
        onPointerOver={handlePointerOver}
        onPointerOut={handlePointerOut}
      >
        <primitive object={reaperLeft.scene} scale={0.8} />
      </mesh>

      <PerspectiveCamera
        makeDefault
        fov={75}
        position={isZoomed ? [4.2, 2.2, 0] : [13, 5, 20.2]}
        zoom={2.3}
      />
    </>
  );
};

export default Reaper;
