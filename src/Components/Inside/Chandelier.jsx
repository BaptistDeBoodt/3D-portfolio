import React, { useState } from 'react';
import { useLoader } from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { useNavigate } from 'react-router-dom';

const Chandelier = ({ onClick }) => {
  const chandelier = useLoader(GLTFLoader, '/inside/Chandelier.glb');
  const trapDoor = useLoader(GLTFLoader, '/inside/Trap Door.glb');

  // State to track the lights' status
  const [lights, setLights] = useState([true, true, true, true, false]);



  const handlePointerOver = () => {
    document.body.style.cursor = 'pointer';
  };

  const handlePointerOut = () => {
    document.body.style.cursor = 'auto';
  };

  const handleTrapDoorPointerOver = () => {
    if (lights[4]) {
      document.body.style.cursor = 'pointer';
    }
  };

  const handleTrapDoorPointerOut = () => {
    document.body.style.cursor = 'auto';
  };

  const navigate = useNavigate();

  const handleTrapDoorClick = () => {
    if (lights[4]) {
      console.log('Trap door clicked!');
      navigate('/down')
    }
  };



  const handleClick = () => {
    setLights((prevLights) => {
      const newLights = [...prevLights];
      const chandelierLights = newLights.slice(0, 4);
      const trapDoorLight = newLights[4];

      if (chandelierLights.some(light => light)) {
        // Turn off the next chandelier light
        const nextLightIndex = chandelierLights.findIndex(light => light);
        newLights[nextLightIndex] = false;
      } else if (!trapDoorLight) {
        // Turn on the trap door light if all chandelier lights are off
        newLights[4] = true;
      } else {
        // Reset to all chandelier lights on, trap door light off
        newLights.fill(true, 0, 4); // Turn on first four lights
        newLights[4] = false; // Turn off trap door light
      }

      return newLights;
    });
  };

  return (
    <>
      <mesh
        position={[0, 3, 0]}
        onClick={() => {
          console.log('Chandelier clicked!');
          handleClick();
          if (onClick) {
            onClick('Chandelier');
          }
        }}
        onPointerOver={handlePointerOver}
        onPointerOut={handlePointerOut}
      >
        <primitive object={chandelier.scene} scale={0.5} />
      </mesh>

      <mesh 
        position={[4, -1.6, 4]} 
        onClick={handleTrapDoorClick} 
        onPointerOver={handleTrapDoorPointerOver} 
        onPointerOut={handleTrapDoorPointerOut}
      >
        <primitive object={trapDoor.scene} scale={1} />
      </mesh>

      {/* Point lights for chandelier */}
      <pointLight 
        castShadow 
        position={[2, 5, -1.2]} 
        intensity={lights[0] ? 10 : 0} 
      />
      <pointLight 
        castShadow 
        position={[2, 5, 1.2]} 
        intensity={lights[1] ? 10 : 0} 
      />
      <pointLight 
        castShadow 
        position={[-2, 5, -1.2]} 
        intensity={lights[2] ? 10 : 0} 
      />
      <pointLight 
        castShadow 
        position={[-2, 5, 1.2]} 
        intensity={lights[3] ? 10 : 0} 
      />

      {/* Point light for trap door */}
      <pointLight 
        castShadow 
        position={[4, -1, 4]} 
        intensity={lights[4] ? 10 : 0} 
      />
    </>
  );
};

export default Chandelier;
