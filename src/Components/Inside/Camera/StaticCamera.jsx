import React from 'react';
import { PerspectiveCamera } from '@react-three/drei';

const StaticCamera = () => {
  return (
    <PerspectiveCamera
      makeDefault
      fov={75}
      position={[13, 5, 20.2]}
      rotation={[-0.2, 0.59, 0.12]}
      zoom={2.3}
    />
  );
};

export default StaticCamera;

