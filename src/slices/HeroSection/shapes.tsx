'use client';

import { Canvas, useFrame } from '@react-three/fiber';
import { gsap } from 'gsap';
import { useRef, useState } from 'react';
import { GradientTexture } from '@react-three/drei';
import * as THREE from 'three';
interface ShapesProps {
  number: number;
  className?: string;
}
interface GeometryProps {
  frameSpeed: number;
}
export default function Shapes({ number, className }: ShapesProps) {
  const [frameSpeed, setFrameSpeed] = useState<number>(0.3);
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
    <div className={className}>
      <Canvas
        style={
          number === 1
            ? { height: '600px', width: '400px' }
            : { height: '200px', width: '200px' }
        }
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
}

export function Dodecahedron({ frameSpeed }: GeometryProps) {
  useFrame((state, delta) => (ref.current.rotation.x += frameSpeed * delta));

  const ref = useRef<THREE.Mesh>(null!);
  return (
    <mesh ref={ref} position={[0, 0, 2]} rotation={[Math.PI / 1, -10, -10]}>
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
}

export function Octahedron({ frameSpeed }: GeometryProps) {
  useFrame((state, delta) => (ref.current.rotation.x += frameSpeed * delta));

  const ref = useRef<THREE.Mesh>(null!);
  return (
    <mesh ref={ref} position={[0, 0, 1]} rotation={[Math.PI / 1, -10, -10]}>
      <octahedronGeometry />

      <meshNormalMaterial>
        <GradientTexture
          stops={[0, 1]}
          colors={['#FC5C7D', '#2c0be5']}
          size={329}
        />
      </meshNormalMaterial>
    </mesh>
  );
}

export function Icosahedron({ frameSpeed }: GeometryProps) {
  const ref = useRef<THREE.Mesh>(null!);
  useFrame((state, delta) => (ref.current.rotation.y += frameSpeed * delta));

  return (
    <mesh ref={ref} position={[0, 0, 3]} rotation={[Math.PI / -20, 0, -10]}>
      <icosahedronGeometry attach="geometry" args={[1, 0]} />

      <meshNormalMaterial>
        <GradientTexture
          stops={[0, 1]}
          colors={['#12c2e9', '#c471ed']}
          size={329}
        />
      </meshNormalMaterial>
    </mesh>
  );
}
