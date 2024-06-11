'use client';

import { Canvas, useFrame } from '@react-three/fiber';
import { gsap } from 'gsap';
import { useRef, useState } from 'react';
import { GradientTexture } from '@react-three/drei';
import THREE from 'three';
interface ShapesProps {
  index: number;
}

interface GeometryProps {
  frameSpeed: number;
}

export default function Shapes({ index }: ShapesProps) {
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
}

export function Box({ frameSpeed }: GeometryProps) {
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
}

export function Triangle({ frameSpeed }: GeometryProps) {
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
}

// 'use client';
// import { useRef, useState } from 'react';
// import { Canvas, useFrame } from '@react-three/fiber';
// import { OrbitControls } from '@react-three/drei';

// function Box(props) {
//   // This reference gives us direct access to the THREE.Mesh object
//   const ref = useRef();
//   // Hold state for hovered and clicked events
//   const [hovered, hover] = useState(false);
//   const [clicked, click] = useState(false);
//   // Subscribe this component to the render-loop, rotate the mesh every frame
//   useFrame((state, delta) => (ref.current.rotation.x += delta));
//   // Return the view, these are regular Threejs elements expressed in JSX
//   return (
//     <mesh
//       {...props}
//       ref={ref}
//       scale={clicked ? 1.5 : 1}
//       onClick={(event) => click(!clicked)}
//       onPointerOver={(event) => (event.stopPropagation(), hover(true))}
//       onPointerOut={(event) => hover(false)}
//     >
//       <cylinderGeometry args={[1, 1, 1]} />
//       <meshStandardMaterial color={hovered ? 'hotpink' : 'orange'} />
//     </mesh>
//   );
// }

// export default function Boxy() {
//   return (
//     <Canvas className="max-h-96"
//   >
//       <ambientLight intensity={Math.PI / 2} />
//       <spotLight
//         position={[10, 10, 10]}
//         angle={0.15}
//         penumbra={1}
//         decay={0}
//         intensity={Math.PI}
//       />
//       <pointLight position={[-10, -10, -10]} decay={0} intensity={Math.PI} />
//       {/* <Box position={[-1.2, 0, 0]} /> */}
//       <Box position={[0, 0, 0]} />
//       <OrbitControls />
//     </Canvas>
//   );
// }
