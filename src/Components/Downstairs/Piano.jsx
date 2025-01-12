import React, { useState, useEffect } from 'react';
import { useLoader } from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { sequence } from '../../consts/sequence'; // Import the sequence

const Piano = ({ onClick }) => {
  const piano = useLoader(GLTFLoader, '/downstairs/Piano.glb');
  const pianoSound = new Audio('/audio/fullSequence.mp3');

  const [lightStates, setLightStates] = useState([true, true, true]);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    // Event listeners to track when the sound starts and stops
    pianoSound.onplay = () => setIsPlaying(true);
    pianoSound.onended = () => setIsPlaying(false);

    // Cleanup event listeners on unmount
    return () => {
      pianoSound.onplay = null;
      pianoSound.onended = null;
    };
  }, [pianoSound]);

  const handleClick = () => {
    if (!isPlaying) {
      pianoSound.play();
      playLightSequence();
    }
  };

  const handlePointerOver = () => {
    if (!isPlaying) {
      document.body.style.cursor = 'pointer';
    }
  };

  const handlePointerOut = () => {
    if (!isPlaying) {
      document.body.style.cursor = 'auto';
    }
  };

  const playLightSequence = () => {
    // Turn off all lights initially
    setLightStates([
      false, false, false,
      false, false, false,
      false, false, false,
      false, false, false,
    ]);

    // Define the light timing sequence
    sequence.forEach(({ time, states }) => {
      setTimeout(() => setLightStates(states), time);
    });
  };

  // Disable cursor when isPlaying is true
  useEffect(() => {
    if (isPlaying) {
      document.body.style.cursor = 'not-allowed'; // Example disabled cursor style
    } else {
      document.body.style.cursor = 'auto';
    }
  }, [isPlaying]);

  return (
    <>
      <mesh
        position={[0, -2, 0]}
        rotation={[0, 0.5, 0]}
        onClick={() => {
          handleClick();
          if (onClick) {
            onClick('Piano');
          }
        }}
        onPointerOver={handlePointerOver}
        onPointerOut={handlePointerOut}
      >
        <primitive object={piano.scene} scale={0.3} />
      </mesh>

      <pointLight
        castShadow
        position={[-2.1, 0.7, 1.5]}
        intensity={lightStates[0] ? 20 : 0}
      />

      <pointLight
        position={[2.4, 1.6, 4.3]}
        intensity={lightStates[1] ? 20 : 0}
      />

      <pointLight
        position={[2.0, 0.7, -2.1]}
        intensity={lightStates[2] ? 20 : 0}
      />

      <pointLight
        castShadow
        position={[-2.1, 0.7, 1.5]}
        intensity={lightStates[3] ? 20 : 0}
        color="yellow"
      />

      <pointLight
        position={[2.4, 1.6, 4.3]}
        intensity={lightStates[4] ? 20 : 0}
        color="yellow"
      />

      <pointLight
        position={[2.0, 0.7, -2.1]}
        intensity={lightStates[5] ? 20 : 0}
        color="yellow"
      />

      <pointLight
        castShadow
        position={[-2.1, 0.7, 1.5]}
        intensity={lightStates[6] ? 20 : 0}
        color="orange"
      />

      <pointLight
        position={[2.4, 1.6, 4.3]}
        intensity={lightStates[7] ? 20 : 0}
        color="orange"
      />

      <pointLight
        position={[2.0, 0.7, -2.1]}
        intensity={lightStates[8] ? 20 : 0}
        color="orange"
      />

      <pointLight
        castShadow
        position={[-2.1, 0.7, 1.5]}
        intensity={lightStates[9] ? 20 : 0}
        color="red"
      />

      <pointLight
        position={[2.4, 1.6, 4.3]}
        intensity={lightStates[10] ? 20 : 0}
        color="red"
      />

      <pointLight
        position={[2.0, 0.7, -2.1]}
        intensity={lightStates[11] ? 20 : 0}
        color="red"
      />
    </>
  );
};

export default Piano;
