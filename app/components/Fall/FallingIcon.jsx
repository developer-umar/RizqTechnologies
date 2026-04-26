"use client";
import { useRef, useEffect, useState } from 'react';
import Matter from 'matter-js';

const FallingIcons = ({ icons = [] }) => {
  const containerRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [items, setItems] = useState([]); // This will store our physics-synced icons

  // 1. Intersection Observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    if (containerRef.current) observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, []);

  // 2. Physics Engine
  useEffect(() => {
    if (!isVisible || !containerRef.current || icons.length === 0) return;

    const { Engine, World, Bodies, Runner, Events } = Matter;
    const engine = Engine.create();
    const container = containerRef.current;
    const width = container.clientWidth;
    const height = container.clientHeight;

    // Boundaries
    const ground = Bodies.rectangle(width / 2, height + 25, width, 50, { isStatic: true });
    const leftWall = Bodies.rectangle(-25, height / 2, 50, height, { isStatic: true });
    const rightWall = Bodies.rectangle(width + 25, height / 2, 50, height, { isStatic: true });

    // Create Icon Bodies (Radius 25 for normal size)
    const iconBodies = icons.map((url, i) => {
      return Bodies.circle(
        Math.random() * (width - 100) + 50,
        Math.random() * -500 - 50, // Start just above
        25, 
        {
          restitution: 0.5,
          friction: 0.1,
          label: url // Store URL in label to identify in React
        }
      );
    });

    World.add(engine.world, [ground, leftWall, rightWall, ...iconBodies]);

    // Update React State on every engine tick
    Events.on(engine, 'afterUpdate', () => {
      const updatedItems = iconBodies.map(body => ({
        url: body.label,
        x: body.position.x,
        y: body.position.y,
        angle: body.angle
      }));
      setItems(updatedItems);
    });

    const runner = Runner.create();
    Runner.run(runner, engine);

    return () => {
      Runner.stop(runner);
      World.clear(engine.world);
      Engine.clear(engine);
    };
  }, [isVisible, icons]);

  return (
    <div ref={containerRef} className="w-full h-full relative overflow-hidden">
      {items.map((item, idx) => (
        <img
          key={idx}
          src={item.url}
          alt="tech"
          className="absolute w-12 h-12 pointer-events-none select-none active:cursor-grabbing"
          style={{
            left: item.x,
            top: item.y,
            transform: `translate(-50%, -50%) rotate(${item.angle}rad)`,
            willChange: 'transform',
          }}
        />
      ))}
    </div>
  );
};

export default FallingIcons;