'use client';

// import * as THREE from 'three';
import { Canvas, useFrame } from '@react-three/fiber';
import { gsap } from 'gsap';
import { useRef, useState } from 'react';
import { GradientTexture, OrbitControls } from '@react-three/drei';

export default function Shapes({ index }) {
  const [frameSpeed, setFrameSpeed] = useState(0.3);
  const click = () => {
    setFrameSpeed(frameSpeed + 1);

    const interval = setInterval(() => {
      setFrameSpeed((prevSpeed) => {
        if (prevSpeed <= 0.3) {
          clearInterval(interval);
          return 0.3;
        }
        return prevSpeed - 0.1;
      });
    }, 900);
  };

  return (
    <div>
      <Canvas
        style={{ height: '329px' }}
        onClick={() => click()}
        className="cursor-pointer"
        shadows
        gl={{ antialias: false }}
      >
        <ambientLight intensity={Math.PI / 2} />
        <spotLight
          position={[10, 40, -10]}
          angle={0.15}
          penumbra={1}
          decay={0}
          intensity={Math.PI}
        />
        <pointLight position={[-10, -10, -10]} decay={0} intensity={Math.PI} />
        {index === 0 ? (
          <Box frameSpeed={frameSpeed} />
        ) : (
          <Triangle frameSpeed={frameSpeed} />
        )}
        <OrbitControls />
      </Canvas>
    </div>
  );
}

export function Box({ frameSpeed }) {
  useFrame((state, delta) => (ref.current.rotation.x += frameSpeed * delta));

  const ref = useRef();
  return (
    <mesh ref={ref} position={[0, 0, 3]} rotation={[Math.PI / 1, -10, -10]}>
      <boxGeometry args={[1, 1, 1]} onClick={() => click} />

      <meshBasicMaterial>
        <GradientTexture
          stops={[0, 1]}
          colors={['#FC5C7D', '#2c0be5']}
          size={329}
        />
      </meshBasicMaterial>
    </mesh>
  );
}

export function Triangle({ frameSpeed }) {
  const ref = useRef();
  useFrame((state, delta) => (ref.current.rotation.x += frameSpeed * delta));

  return (
    <mesh ref={ref} position={[0, 0, 3]} rotation={[Math.PI / 1, -10, -10]}>
      <tetrahedronGeometry
        attach="geometry"
        args={[1, 0]}
        onClick={() => click()}
      />

      <meshBasicMaterial>
        <GradientTexture
          stops={[0, 1]}
          colors={['#b92b27', '#2c0be5']}
          size={329}
        />
      </meshBasicMaterial>
    </mesh>
  );
}

