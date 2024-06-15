'use client';

import { Canvas, useFrame } from '@react-three/fiber';
import { useCallback, useRef, useState } from 'react';
import { GradientTexture } from '@react-three/drei';
import THREE from 'three';
import React from 'react';
interface ShapesProps {
  index: number;
}

interface GeometryProps {
  frameSpeed: number;
}

export const Shapes = React.memo(({ index }: ShapesProps) => {
  const [frameSpeed, setFrameSpeed] = useState(0.3);

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
    <div className="mx-auto  h-80 w-80">
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
        <pointLight position={[-10, -10, -10]} decay={0} intensity={Math.PI} />
        {index === 0 ? (
          <Box frameSpeed={frameSpeed} />
        ) : (
          <Triangle frameSpeed={frameSpeed} />
        )}
      </Canvas>
    </div>
  );
});
Shapes.displayName = 'StreamlineShapes';

const Box = React.memo(({ frameSpeed }: GeometryProps) => {
  useFrame((state, delta) => (ref.current.rotation.x += frameSpeed * delta));

  const ref = useRef<THREE.Mesh>(null!);
  return (
    <mesh ref={ref} position={[0, 0, 3]} rotation={[Math.PI / 1, -10, -10]}>
      <boxGeometry args={[1, 1, 1]} />

      <meshStandardMaterial>
        <GradientTexture
          stops={[0, 1]}
          colors={['#FC5C7D', '#2c0be5']}
          size={329}
        />
      </meshStandardMaterial>
    </mesh>
  );
});

Box.displayName = 'Box';

const Triangle = React.memo(({ frameSpeed }: GeometryProps) => {
  const ref = useRef<THREE.Mesh>(null!);
  useFrame((state, delta) => (ref.current.rotation.y += frameSpeed * delta));

  return (
    <mesh ref={ref} position={[0, 0, 3]} rotation={[Math.PI / -10, -1, -10]}>
      <tetrahedronGeometry attach="geometry" args={[1, 0]} />

      <meshStandardMaterial>
        <GradientTexture
          stops={[0, 1]}
          colors={['#b92b27', '#2c0be5']}
          size={329}
        />
      </meshStandardMaterial>
    </mesh>
  );
});

Triangle.displayName = 'Triangle';
