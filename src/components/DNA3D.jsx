import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import * as THREE from 'three';

const DNAHelix = () => {
  const groupRef = useRef();

  // Auto-rotate the DNA
  useFrame((state, delta) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += delta * 0.3;
    }
  });

  // Generate DNA helix structure
  const dnaStructure = useMemo(() => {
    const structure = [];
    const segments = 30;
    const radius = 1.5;
    const height = 8;
    const turnHeight = height / 2; // Two full turns

    for (let i = 0; i < segments; i++) {
      const t = i / segments;
      const angle = t * Math.PI * 4; // 2 full rotations
      const y = (t - 0.5) * height;

      // First strand
      const x1 = Math.cos(angle) * radius;
      const z1 = Math.sin(angle) * radius;

      // Second strand (opposite side)
      const x2 = Math.cos(angle + Math.PI) * radius;
      const z2 = Math.sin(angle + Math.PI) * radius;

      structure.push({
        strand1: [x1, y, z1],
        strand2: [x2, y, z2],
        angle: angle,
      });
    }

    return structure;
  }, []);

  return (
    <group ref={groupRef}>
      {/* Strand 1 - Teal color */}
      {dnaStructure.map((segment, i) => (
        <mesh key={`s1-${i}`} position={segment.strand1}>
          <sphereGeometry args={[0.15, 16, 16]} />
          <meshStandardMaterial
            color="#6fa5aa"
            emissive="#407076"
            emissiveIntensity={0.2}
            metalness={0.3}
            roughness={0.4}
          />
        </mesh>
      ))}

      {/* Strand 2 - Rose color */}
      {dnaStructure.map((segment, i) => (
        <mesh key={`s2-${i}`} position={segment.strand2}>
          <sphereGeometry args={[0.15, 16, 16]} />
          <meshStandardMaterial
            color="#ebbab9"
            emissive="#ebbab9"
            emissiveIntensity={0.2}
            metalness={0.3}
            roughness={0.4}
          />
        </mesh>
      ))}

      {/* Base pairs connecting the strands */}
      {dnaStructure.map((segment, i) => {
        if (i % 3 === 0) { // Draw connection every 3 segments
          const midpoint = [
            (segment.strand1[0] + segment.strand2[0]) / 2,
            (segment.strand1[1] + segment.strand2[1]) / 2,
            (segment.strand1[2] + segment.strand2[2]) / 2,
          ];

          const direction = new THREE.Vector3(
            segment.strand2[0] - segment.strand1[0],
            segment.strand2[1] - segment.strand1[1],
            segment.strand2[2] - segment.strand1[2]
          );

          const length = direction.length();
          const quaternion = new THREE.Quaternion();
          quaternion.setFromUnitVectors(
            new THREE.Vector3(0, 1, 0),
            direction.clone().normalize()
          );

          return (
            <mesh
              key={`bp-${i}`}
              position={midpoint}
              quaternion={quaternion}
            >
              <cylinderGeometry args={[0.08, 0.08, length, 8]} />
              <meshStandardMaterial
                color="#d4a5a5"
                metalness={0.2}
                roughness={0.5}
                opacity={0.8}
                transparent
              />
            </mesh>
          );
        }
        return null;
      })}

      {/* Connecting tubes for strands */}
      {dnaStructure.map((segment, i) => {
        if (i < dnaStructure.length - 1) {
          const next = dnaStructure[i + 1];

          // Strand 1 connection
          const midpoint1 = [
            (segment.strand1[0] + next.strand1[0]) / 2,
            (segment.strand1[1] + next.strand1[1]) / 2,
            (segment.strand1[2] + next.strand1[2]) / 2,
          ];

          const direction1 = new THREE.Vector3(
            next.strand1[0] - segment.strand1[0],
            next.strand1[1] - segment.strand1[1],
            next.strand1[2] - segment.strand1[2]
          );

          const length1 = direction1.length();
          const quaternion1 = new THREE.Quaternion();
          quaternion1.setFromUnitVectors(
            new THREE.Vector3(0, 1, 0),
            direction1.clone().normalize()
          );

          // Strand 2 connection
          const midpoint2 = [
            (segment.strand2[0] + next.strand2[0]) / 2,
            (segment.strand2[1] + next.strand2[1]) / 2,
            (segment.strand2[2] + next.strand2[2]) / 2,
          ];

          const direction2 = new THREE.Vector3(
            next.strand2[0] - segment.strand2[0],
            next.strand2[1] - segment.strand2[1],
            next.strand2[2] - segment.strand2[2]
          );

          const length2 = direction2.length();
          const quaternion2 = new THREE.Quaternion();
          quaternion2.setFromUnitVectors(
            new THREE.Vector3(0, 1, 0),
            direction2.clone().normalize()
          );

          return (
            <group key={`conn-${i}`}>
              <mesh position={midpoint1} quaternion={quaternion1}>
                <cylinderGeometry args={[0.06, 0.06, length1, 8]} />
                <meshStandardMaterial
                  color="#6fa5aa"
                  metalness={0.3}
                  roughness={0.4}
                />
              </mesh>
              <mesh position={midpoint2} quaternion={quaternion2}>
                <cylinderGeometry args={[0.06, 0.06, length2, 8]} />
                <meshStandardMaterial
                  color="#ebbab9"
                  metalness={0.3}
                  roughness={0.4}
                />
              </mesh>
            </group>
          );
        }
        return null;
      })}
    </group>
  );
};

const DNA3D = () => {
  return (
    <div className="w-full h-[500px] md:h-[600px] relative">
      <Canvas
        camera={{ position: [0, 0, 12], fov: 50 }}
        className="bg-transparent"
      >
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} />
        <pointLight position={[-10, -10, -10]} intensity={0.5} />
        <spotLight
          position={[0, 10, 0]}
          angle={0.3}
          penumbra={1}
          intensity={0.5}
          castShadow
        />

        <DNAHelix />

        <OrbitControls
          enableZoom={true}
          enablePan={false}
          minDistance={8}
          maxDistance={20}
          autoRotate={false}
        />
      </Canvas>

      {/* Instructional text */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-center">
        <p className="text-sm text-gray-500 dark:text-gray-400 bg-white/80 dark:bg-slate-800/80 px-4 py-2 rounded-lg backdrop-blur-sm">
          Drag to rotate • Scroll to zoom
        </p>
      </div>
    </div>
  );
};

export default DNA3D;
