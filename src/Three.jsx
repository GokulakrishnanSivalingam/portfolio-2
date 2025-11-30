import React, { Suspense, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';
import "./Three.css";

const Model = () => {
  const modelRef = useRef();
  const { scene } = useGLTF('/avs.glb');

  // Smooth continuous rotation animation
  useFrame((state) => {
    if (modelRef.current) {
      const t = state.clock.getElapsedTime();
      // Smooth Y-axis rotation for better viewing angle
      modelRef.current.rotation.y = t * 3;
      // Subtle X-axis tilt for depth
      modelRef.current.rotation.x = Math.sin(t * 1.5) * 0.15;
    }
  });

  // Optimized configuration for full-height coverage
  scene.scale.set(12, 12, 12);
  scene.position.set(0, -0.8, 0);
  scene.rotation.set(0, 0, 0); // Better initial viewing angle

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
          position: [0, 0, 6],
          fov: 45
        }}
      >
        <Suspense fallback={null}>
          <ambientLight intensity={0.6} />
          <pointLight position={[8, 8, 8]} intensity={0.8} />
          <pointLight position={[-5, -5, 5]} intensity={0.4} />
          <Model />
          <OrbitControls 
            enableZoom={false}
            enablePan={false}
            autoRotate={false}
            minPolarAngle={Math.PI / 2.5}
            maxPolarAngle={Math.PI / 1.8}
          />
        </Suspense>
      </Canvas>
    </div>
  );
};

useGLTF.preload('/avs.glb');

export default Three;
