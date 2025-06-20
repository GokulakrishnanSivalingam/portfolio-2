import React, { Suspense, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';
import "./Three.css";

const Model = () => {
  const modelRef = useRef();
  const { scene } = useGLTF('/avs.glb');

  // Modified rotation animation - only horizontal
  useFrame((state) => {
    if (modelRef.current) {
      const t = state.clock.getElapsedTime();
      modelRef.current.rotation.y = Math.sin(t / 4) / 4 + Math.PI / 4;
    }
  });

  // Adjusted configuration
  scene.scale.set(9,9,9);
  scene.position.set(0, -0.6, 0); // Moved down slightly
  scene.rotation.set(0, Math.PI / 4, 0);

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
          position: [0, 0, 5], // Increased z-position
          fov: 38// Increased field of view
        }}
      >
        <Suspense fallback={null}>
          <ambientLight intensity={0.5} />
          <pointLight position={[5, 5, 5]} />
          <Model />
          <OrbitControls 
            enableZoom={false}
            enablePan={false}
            autoRotate={false} // Disabled auto-rotation
            minPolarAngle={Math.PI / 2} // Lock vertical rotation
            maxPolarAngle={Math.PI / 2}
          />
        </Suspense>
      </Canvas>
    </div>
  );
};

useGLTF.preload('/avs.glb');

export default Three;
