import React, { Suspense, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';
import "./Three.css";

const Model = () => {
  const modelRef = useRef();
  const { scene } = useGLTF('/avs.glb');

  // Modified rotation animation for 360-degree rotation
  useFrame((state) => {
    if (modelRef.current) {
      const t = state.clock.getElapsedTime();
      // Full 360-degree rotation (2 * Math.PI = 360 degrees)
      modelRef.current.rotation.y = t * 0.5; // Adjust speed by changing multiplier (0.5 = slower, 1 = faster)
    }
  });

  // Adjusted configuration
  scene.scale.set(9, 9, 9);
  scene.position.set(0, -0.5, 0);
  scene.rotation.set(0, 0, 0); // Reset initial rotation

  return (
    <primitive 
      ref={modelRef}
      object={scene} 
      dispose={null}
    />
  );
};

const Three = () => {
  return (
    <div className='three'>
      <Canvas
        camera={{ 
          position: [0, 0, 5],
          fov: 38
        }}
      >
        <Suspense fallback={null}>
          <ambientLight intensity={0.5} />
          <pointLight position={[5, 5, 5]} />
          <Model />
          <OrbitControls 
            enableZoom={false}
            enablePan={false}
            autoRotate={false}
            minPolarAngle={Math.PI / 2}
            maxPolarAngle={Math.PI / 2}
          />
        </Suspense>
      </Canvas>
    </div>
  );
};

useGLTF.preload('/avs.glb');

export default Three;
