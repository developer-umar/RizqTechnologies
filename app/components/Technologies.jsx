"use client";
import React, { Suspense, useRef, useState, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, Sphere, MeshDistortMaterial, OrbitControls, Html } from '@react-three/drei';
import { motion } from 'framer-motion';

// --- Technology Stack (Using Skill Icons CDN - No Downloads Needed) ---
const techStack = [
  { id: "react", name: "React" },
  { id: "nextjs", name: "Next.js" },
  { id: "nodejs", name: "Node.js" },
  { id: "tailwind", name: "Tailwind" },
  { id: "threejs", name: "Three.js" },
  { id: "mongodb", name: "MongoDB" },
  { id: "docker", name: "Docker" },
  { id: "express", name: "Express" },
  { id: "ts", name: "TypeScript" },
  { id: "js", name: "JavaScript" },
  { id: "figma", name: "Figma" },
  { id: "aws", name: "AWS" },
  { id: "firebase", name: "Firebase" },
  { id: "redux", name: "Redux" },
  { id: "postman", name: "Postman" },
  { id: "git", name: "Git" },
];

// Helper function to get CDN URL
const getIconUrl = (id) => `https://skillicons.dev/icons?i=${id}`;

const rizqCoreLogo = "/rizq-logo.png"; // Sirf ye ek file chahiye public folder mein

// --- Sub-Components ---

function TechLogoBillboard({ position, iconId, name }) {
  const groupRef = useRef();
  const [hovered, setHovered] = useState(false);

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.position.y += Math.sin(state.clock.elapsedTime + position[0]) * 0.005;
      groupRef.current.quaternion.copy(state.camera.quaternion);
    }
  });

  return (
    <group position={position} ref={groupRef}>
      <Html
        distanceFactor={6}
        transform
        occlude="blending"
      >
        <div 
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
          className="flex flex-col items-center justify-center p-2 rounded-2xl bg-black/50 backdrop-blur-md border border-white/10 shadow-2xl cursor-pointer transition-all duration-500"
          style={{ transform: hovered ? 'scale(1.2)' : 'scale(1)' }}
        >
          <img 
            src={getIconUrl(iconId)} 
            alt={name} 
            className={`h-8 w-8 object-contain transition-all duration-500 ${hovered ? 'grayscale-0 scale-110' : 'grayscale opacity-60'}`} 
          />
          {hovered && (
            <span className="text-[8px] text-yellow-500 font-bold uppercase mt-1 tracking-tighter">
              {name}
            </span>
          )}
        </div>
      </Html>
    </group>
  );
}

const MobileMarqueeLogos = () => (
  <div className="flex flex-col justify-center items-center h-full w-full relative overflow-hidden bg-black">
    <div className="text-center mb-10">
      <h2 className="text-yellow-500/50 text-xs tracking-[0.5em] uppercase font-bold">Tech Ecosystem</h2>
      <div className="h-[1px] w-24 bg-gradient-to-r from-transparent via-yellow-500 to-transparent mt-2 mx-auto" />
    </div>

    <div className="relative flex overflow-hidden w-full py-10 border-y border-white/5">
      <motion.div
        className="flex whitespace-nowrap space-x-10 px-10"
        animate={{ x: ["0%", "-50%"] }}
        transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
      >
        {[...techStack, ...techStack].map((tech, i) => (
          <div key={i} className="flex flex-col items-center justify-center p-3 rounded-xl bg-white/5 border border-white/10 flex-none w-20 h-20">
            <img src={getIconUrl(tech.id)} alt={tech.name} className="h-10 w-10 object-contain" />
            <span className="text-[7px] text-white/40 uppercase mt-2 font-mono">{tech.name}</span>
          </div>
        ))}
      </motion.div>
    </div>
  </div>
);

// --- Main Component ---

export default function TechUniverse() {
  const [mounted, setMounted] = useState(false);
  const coreMeshRef = useRef();

  useEffect(() => {
    setMounted(true);
  }, []);

  useFrame((state) => {
    if (coreMeshRef.current) {
      const s = 1 + Math.sin(state.clock.elapsedTime * 1.5) * 0.03;
      coreMeshRef.current.scale.set(s, s, s);
    }
  });

  if (!mounted) return <div className="h-screen w-full bg-black" />;

  return (
    <section className="relative w-full h-[600px] md:h-screen bg-black overflow-hidden select-none">
      
      {/* Black & Gold Gradient Background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,_#221a0a_0%,_#000000_80%)] pointer-events-none" />
      
      <div className="hidden md:block w-full h-full">
        <Canvas dpr={[1, 2]} camera={{ position: [0, 0, 20], fov: 35 }}>
          <Suspense fallback={null}>
            <ambientLight intensity={0.5} />
            <pointLight position={[10, 10, 10]} intensity={2} color="#facc15" />
            <pointLight position={[-10, -10, -10]} intensity={1} color="#ca8a04" />

            {/* Rizq Core Sphere */}
            <Sphere ref={coreMeshRef} args={[2, 100, 100]}>
              <MeshDistortMaterial 
                color="#050505" 
                speed={2} 
                distort={0.2} 
                roughness={0.1} 
                metalness={1}
                emissive="#422006"
                emissiveIntensity={0.5}
              />
              <Html position={[0, 0, 0]} transform distanceFactor={6} className="pointer-events-none">
                <img 
                  src={rizqCoreLogo} 
                  alt="Rizq Logo" 
                  className="h-24 w-auto filter drop-shadow-[0_0_20px_rgba(250,204,21,0.4)]" 
                />
              </Html>
            </Sphere>

            {/* Orbiting Icons */}
            {techStack.map((tech, idx) => {
              const angle = (idx / techStack.length) * Math.PI * 2;
              const radius = 8;
              const x = Math.cos(angle) * radius;
              const z = Math.sin(angle) * radius;
              const y = (idx % 2 === 0 ? 1 : -1) * (Math.random() * 4);
              
              return (
                <TechLogoBillboard 
                  key={idx} 
                  position={[x, y, z]} 
                  iconId={tech.id} 
                  name={tech.name} 
                />
              );
            })}

            <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={0.4} />
          </Suspense>
        </Canvas>
      </div>

      {/* Mobile View */}
      <div className="md:hidden w-full h-full flex items-center">
        <MobileMarqueeLogos />
      </div>

      <div className="absolute bottom-10 w-full text-center pointer-events-none">
        <p className="text-[10px] text-yellow-600/40 uppercase tracking-[1em] font-medium">
          Rizq Technologies • Future Ready
        </p>
      </div>
    </section>
  );
}