"use client";
import React, { Suspense, useRef, useState, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, Text, Sphere, MeshDistortMaterial, OrbitControls } from '@react-three/drei';
import * as THREE from 'three';
import { motion } from 'framer-motion';

// --- Configuration ---
const techStack = [
  { name: "React", color: "#61DAFB" },
  { name: "Next.js", color: "#ffffff" },
  { name: "Node.js", color: "#339933" },
  { name: "Tailwind", color: "#06B6D4" },
  { name: "Three.js", color: "#fcca03" },
  { name: "MongoDB", color: "#47A248" },
  { name: "Framer", color: "#E10098" },
  { name: "GSAP", color: "#88CE02" },
];

// --- Sub-Components ---

function TechIcon({ position, name, color }) {
  const textRef = useRef();
  
  useFrame((state) => {
    if (textRef.current) {
      // Smooth vertical floating
      textRef.current.position.y += Math.sin(state.clock.elapsedTime + position[0]) * 0.005;
    }
  });

  return (
    <Float speed={1.5} rotationIntensity={0.5} floatIntensity={0.5}>
      <group position={position} ref={textRef}>
        <Text
          fontSize={0.45}
          color={color}
          anchorX="center"
          anchorY="middle"
          maxWidth={2}
          textAlign="center"
        >
          {name}
        </Text>
      </group>
    </Float>
  );
}

// Mobile Marquee for Performance
const MobileMarquee = () => (
  <div className="flex flex-col justify-center items-center h-full w-full px-4">
    <h2 className="text-gray-500 text-sm tracking-[0.4em] uppercase mb-12">Core Technologies</h2>
    <div className="relative flex overflow-hidden w-full py-8 border-y border-white/5 bg-white/[0.02]">
      <motion.div 
        className="flex whitespace-nowrap space-x-16 px-8"
        animate={{ x: ["0%", "-50%"] }}
        transition={{ repeat: Infinity, duration: 15, ease: "linear" }}
      >
        {[...techStack, ...techStack].map((tech, i) => (
          <span 
            key={i} 
            className="text-3xl font-bold uppercase italic tracking-tighter"
            style={{ 
              color: tech.color, 
              textShadow: `0 0 20px ${tech.color}44`,
              WebkitTextStroke: tech.name === "Next.js" ? "1px #ffffff33" : "none"
            }}
          >
            {tech.name}
          </span>
        ))}
      </motion.div>
    </div>
  </div>
);

// --- Main Component ---

export default function TechUniverse() {
  const [mounted, setMounted] = useState(false);

  // Client-side hydration check
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return <div className="h-screen w-full bg-black" />;

  return (
    <section className="relative w-full h-[600px] md:h-screen bg-black overflow-hidden select-none">
      
      {/* Visual Enhancements */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,_#1a1a2e_0%,_#000000_80%)] pointer-events-none" />
      
      {/* Desktop Scene */}
      <div className="hidden md:block w-full h-full">
        <Canvas 
          dpr={[1, 2]} 
          camera={{ position: [0, 0, 15], fov: 40 }}
          gl={{ antialias: true }}
        >
          <Suspense fallback={null}>
            <ambientLight intensity={0.5} />
            <pointLight position={[10, 10, 10]} intensity={2} color="#4f46e5" />
            <pointLight position={[-10, -10, -10]} intensity={1} color="#7c3aed" />

            {/* Rizq Core: Animated Distorted Mesh */}
            <Sphere args={[1.5, 128, 128]}>
              <MeshDistortMaterial 
                color="#050505" 
                speed={2.5} 
                distort={0.4} 
                roughness={0.2} 
                metalness={0.9}
                emissive="#111"
              />
            </Sphere>

            {/* Icons Cloud */}
            {techStack.map((tech, idx) => {
              const angle = (idx / techStack.length) * Math.PI * 2;
              const radius = 6;
              const x = Math.cos(angle) * radius;
              const z = Math.sin(angle) * radius;
              const y = (idx % 2 === 0 ? 1 : -1) * (Math.random() * 2 + 1);
              
              return (
                <TechIcon 
                  key={idx} 
                  position={[x, y, z]} 
                  name={tech.name} 
                  color={tech.color} 
                />
              );
            })}

            {/* Smooth Controls */}
            <OrbitControls 
              enableZoom={false} 
              autoRotate 
              autoRotateSpeed={0.6} 
              makeDefault
            />
          </Suspense>
        </Canvas>
      </div>

      {/* Mobile Scene */}
      <div className="md:hidden w-full h-full flex items-center">
        <MobileMarquee />
      </div>

      {/* Overlay UI */}
      <div className="absolute bottom-12 w-full flex flex-col items-center justify-center space-y-2 pointer-events-none">
        <div className="h-[1px] w-12 bg-gradient-to-r from-transparent via-blue-500 to-transparent mb-2" />
        <p className="text-[10px] text-white/30 uppercase tracking-[0.8em] font-light">
          Rizq Technologies
        </p>
      </div>

    </section>
  );
}