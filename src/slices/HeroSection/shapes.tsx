'use client';

import { Canvas, useFrame } from '@react-three/fiber';
import { useCallback, useRef, useState } from 'react';
import { GradientTexture } from '@react-three/drei';
import THREE from 'three';
import React from 'react';

interface ShapesProps {
  number: number;
  className?: string;
}
interface GeometryProps {
  frameSpeed: number;
}
export const Shapes = React.memo(({ number, className }: ShapesProps) => {
  const [frameSpeed, setFrameSpeed] = useState<number>(0.3);

  const click = useCallback(() => {
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
  }, [frameSpeed]);

  return (
    <div className={className}>
      <Canvas
        onClick={click}
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
        <pointLight position={[-8, -8, -8]} decay={0} intensity={Math.PI} />
        {number === 1 && <Icosahedron frameSpeed={frameSpeed} />}
        {number === 2 && <Dodecahedron frameSpeed={frameSpeed} />}
        {number === 2 && <Dodecahedron frameSpeed={frameSpeed} />}
      </Canvas>
    </div>
  );
});
Shapes.displayName = 'HeroShapes';

const Dodecahedron = React.memo(({ frameSpeed }: GeometryProps) => {
  useFrame((state, delta) => (ref.current.rotation.x += frameSpeed * delta));

  const ref = useRef<THREE.Mesh>(null!);
  return (
    <mesh ref={ref} position={[0, 0, 3]} rotation={[Math.PI / 1, -10, -10]}>
      <dodecahedronGeometry args={[1, 0]} />

      <meshNormalMaterial>
        <GradientTexture
          stops={[0, 1]}
          colors={['#FC5C7D', '#2c0be5']}
          size={329}
        />
      </meshNormalMaterial>
    </mesh>
  );
});
Dodecahedron.displayName = 'Dodecahedron';

const Icosahedron = React.memo(({ frameSpeed }: GeometryProps) => {
  const ref = useRef<THREE.Mesh>(null!);

  useFrame((state, delta) => (ref.current.rotation.y += frameSpeed * delta));

  return (
    <mesh ref={ref} position={[0, 0, 3]} rotation={[Math.PI / -20, 0, -10]}>
      <icosahedronGeometry args={[1, 0]} />
      <meshNormalMaterial>
        <GradientTexture
          stops={[0, 1]}
          colors={['#12c2e9', '#c471ed']}
          size={329}
        />
      </meshNormalMaterial>
    </mesh>
  );
});

Icosahedron.displayName = 'Icosahedron';
