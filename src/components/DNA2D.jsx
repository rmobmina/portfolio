import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

const DNA2D = () => {
  const [rotation, setRotation] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setRotation((prev) => (prev + 1) % 360);
    }, 50);
    return () => clearInterval(interval);
  }, []);

  // Generate helix points
  const segments = 20;
  const points = [];

  for (let i = 0; i < segments; i++) {
    const angle = (i / segments) * Math.PI * 4 + (rotation * Math.PI) / 180;
    const y = (i / segments) * 100;
    const x1 = 50 + Math.cos(angle) * 20;
    const x2 = 50 + Math.cos(angle + Math.PI) * 20;
    const z1 = Math.sin(angle);
    const z2 = Math.sin(angle + Math.PI);

    points.push({
      y,
      strand1: { x: x1, z: z1 },
      strand2: { x: x2, z: z2 },
    });
  }

  return (
    <div className="w-full h-[500px] md:h-[600px] relative flex items-center justify-center bg-gradient-to-br from-transparent to-muted-teal/5 dark:to-muted-teal/10">
      <svg
        viewBox="0 0 100 120"
        className="w-full max-w-md h-full"
        preserveAspectRatio="xMidYMid meet"
      >
        {/* Strand 1 - Teal */}
        <path
          d={points
            .map((p, i) => `${i === 0 ? 'M' : 'L'} ${p.strand1.x} ${p.y + 10}`)
            .join(' ')}
          stroke="#6fa5aa"
          strokeWidth="2"
          fill="none"
          opacity={0.8}
        />

        {/* Strand 2 - Rose */}
        <path
          d={points
            .map((p, i) => `${i === 0 ? 'M' : 'L'} ${p.strand2.x} ${p.y + 10}`)
            .join(' ')}
          stroke="#ebbab9"
          strokeWidth="2"
          fill="none"
          opacity={0.8}
        />

        {/* Base pairs */}
        {points.map((p, i) => {
          if (i % 2 === 0 && p.strand1.z > 0 && p.strand2.z > 0) {
            return (
              <g key={`bp-${i}`}>
                <line
                  x1={p.strand1.x}
                  y1={p.y + 10}
                  x2={p.strand2.x}
                  y2={p.y + 10}
                  stroke="#d4a5a5"
                  strokeWidth="1.5"
                  opacity={0.6}
                />
                <circle
                  cx={p.strand1.x}
                  cy={p.y + 10}
                  r="2.5"
                  fill="#6fa5aa"
                  opacity={0.9}
                />
                <circle
                  cx={p.strand2.x}
                  cy={p.y + 10}
                  r="2.5"
                  fill="#ebbab9"
                  opacity={0.9}
                />
              </g>
            );
          }
          return null;
        })}

        {/* Nucleotide spheres */}
        {points.map((p, i) => (
          <g key={`nucleotides-${i}`}>
            {p.strand1.z > -0.3 && (
              <circle
                cx={p.strand1.x}
                cy={p.y + 10}
                r="2"
                fill="#407076"
                opacity={Math.max(0.3, p.strand1.z)}
              />
            )}
            {p.strand2.z > -0.3 && (
              <circle
                cx={p.strand2.x}
                cy={p.y + 10}
                r="2"
                fill="#ebbab9"
                opacity={Math.max(0.3, p.strand2.z)}
              />
            )}
          </g>
        ))}
      </svg>

      {/* Info text */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-center">
        <p className="text-sm text-gray-500 dark:text-gray-400 bg-white/80 dark:bg-slate-800/80 px-4 py-2 rounded-lg backdrop-blur-sm">
          Animated DNA Double Helix
        </p>
      </div>

      {/* Decorative elements */}
      <motion.div
        className="absolute top-10 left-10 w-20 h-20 rounded-full bg-muted-teal/10 blur-xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div
        className="absolute bottom-10 right-10 w-24 h-24 rounded-full bg-cotton-rose/10 blur-xl"
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1
        }}
      />
    </div>
  );
};

export default DNA2D;
