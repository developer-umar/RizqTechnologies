"use client";
import { useRef, useEffect, useState } from 'react';
import Matter from 'matter-js';

const FallingIcons = ({ icons = [] }) => {
  const containerRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [items, setItems] = useState([]);

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

  useEffect(() => {
    if (!isVisible || !containerRef.current || icons.length === 0) return;

    const { Engine, World, Bodies, Runner, Events, Mouse, MouseConstraint } = Matter;
    const engine = Engine.create();
    const container = containerRef.current;
    const width = container.clientWidth;
    const height = container.clientHeight;

    // Physics Settings
    engine.world.gravity.y = 1.0;

    // Boundaries
    const wallOptions = { isStatic: true, render: { visible: false } };
    const ground = Bodies.rectangle(width / 2, height + 25, width, 50, wallOptions);
    const leftWall = Bodies.rectangle(-25, height / 2, 50, height, wallOptions);
    const rightWall = Bodies.rectangle(width + 25, height / 2, 50, height, wallOptions);

    // Create Icon Bodies (Radius 35 for a bolder look)
    const iconBodies = icons.map((url, i) => {
      return Bodies.circle(
        Math.random() * (width - 100) + 50,
        Math.random() * -600 - 100, // Spread fall
        35, // Increased radius for interaction
        {
          restitution: 0.6,
          friction: 0.1,
          label: url
        }
      );
    });

    // Mouse Constraint (Enables the "Uchalna" effect on desktop)
    const mouse = Mouse.create(container);
    const mouseConstraint = MouseConstraint.create(engine, {
      mouse: mouse,
      constraint: {
        stiffness: 0.2,
        render: { visible: false }
      }
    });

    World.add(engine.world, [ground, leftWall, rightWall, mouseConstraint, ...iconBodies]);

    // Update State for React
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
    <div ref={containerRef} className="w-full h-full relative overflow-hidden touch-none">
      {items.map((item, idx) => (
        <div
          key={idx}
          className="absolute pointer-events-none select-none"
          style={{
            left: item.x,
            top: item.y,
            transform: `translate(-50%, -50%) rotate(${item.angle}rad)`,
            willChange: 'transform',
          }}
        >
          <img
            src={item.url}
            alt="tech-icon"
            className="w-16 h-16 md:w-20 md:h-20 object-contain drop-shadow-[0_10px_10px_rgba(0,0,0,0.5)]"
          />
        </div>
      ))}
    </div>
  );
};

export default FallingIcons;