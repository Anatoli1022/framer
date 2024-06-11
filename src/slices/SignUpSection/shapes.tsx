'use client';

import { useResize } from '@/app/lib/useResize/useResize';
import { Canvas, useFrame } from '@react-three/fiber';
import { gsap } from 'gsap';
import { useRef, useState } from 'react';
import { GradientTexture } from '@react-three/drei';
import THREE from 'three';

interface ShapesProps {
  number: number;
  className?: string;
}
interface GeometryProps {
  frameSpeed: number;
}

export default function Shapes({ number, className }: ShapesProps) {
  const [frameSpeed, setFrameSpeed] = useState(0.3);
  const { isScreenLg } = useResize();
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
        style={{
          height: isScreenLg ? '329px' : '149px',
          width: isScreenLg ? '300px' : '150px',
        }}
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
        <pointLight position={[-8, -8, -8]} decay={0} intensity={Math.PI} />
        {number === 1 ? (
          <Capsule frameSpeed={frameSpeed} />
        ) : (
          <Cone frameSpeed={frameSpeed} />
        )}
      </Canvas>
    </div>
  );
}

export function Capsule({ frameSpeed }: GeometryProps) {
  useFrame((state, delta) => (ref.current.rotation.x += frameSpeed * delta));

  const ref = useRef<THREE.Mesh>(null!);
  return (
    <mesh ref={ref} position={[0, 0, 1]} rotation={[Math.PI / 1, -10, -10]}>
      <capsuleGeometry args={[1, 1, 8, 20]} />

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

export function Cone({ frameSpeed }: GeometryProps) {
  const ref = useRef<THREE.Mesh>(null!);
  useFrame((state, delta) => (ref.current.rotation.y += frameSpeed * delta));

  return (
    <mesh ref={ref} position={[0, 0, 3]} rotation={[Math.PI / -20, 0, -10]}>
      <coneGeometry attach="geometry" />

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
