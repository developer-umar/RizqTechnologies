"use client";
import { useRef, useEffect, useState } from 'react';
import Matter from 'matter-js';

const FallingIcons = ({ icons = [] }) => {
  const containerRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

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
    if (!isVisible || !containerRef.current) return;

    const { Engine, Render, World, Bodies, Runner, Mouse, MouseConstraint } = Matter;
    const engine = Engine.create();
    const container = containerRef.current;
    
    const width = container.clientWidth;
    const height = container.clientHeight;

    const render = Render.create({
      element: container,
      engine: engine,
      options: {
        width,
        height,
        background: 'transparent',
        wireframes: false,
      }
    });

    // Boundaries
    const wallOptions = { isStatic: true, render: { visible: false } };
    World.add(engine.world, [
      Bodies.rectangle(width / 2, height + 25, width, 50, wallOptions), // Floor
      Bodies.rectangle(-25, height / 2, 50, height, wallOptions),      // Left
      Bodies.rectangle(width + 25, height / 2, 50, height, wallOptions),// Right
      Bodies.rectangle(width / 2, -100, width, 50, wallOptions)        // Ceiling
    ]);

    // Create Icons with better scaling
    const iconBodies = icons.map((url) => {
      return Bodies.circle(
        Math.random() * (width - 100) + 50, 
        Math.random() * -800, 
        40, // Radius for the physics body
        {
          restitution: 0.5,
          friction: 0.1,
          render: {
            sprite: {
              texture: url,
              xScale: 1.5, // Check if your icons are 50px or 128px
              yScale: 1.5
            }
          }
        }
      );
    });

    World.add(engine.world, iconBodies);

    // Mouse control (Desktop only for performance)
    if (window.innerWidth > 768) {
      const mouse = Mouse.create(render.canvas);
      const mouseConstraint = MouseConstraint.create(engine, {
        mouse: mouse,
        constraint: { stiffness: 0.2, render: { visible: false } }
      });
      World.add(engine.world, mouseConstraint);
    }

    Runner.run(Runner.create(), engine);
    Render.run(render);

    return () => {
      Render.stop(render);
      World.clear(engine.world);
      Engine.clear(engine);
      if (render.canvas) render.canvas.remove();
    };
  }, [isVisible, icons]);

  return <div ref={containerRef} className="w-full h-full relative" />;
};

export default FallingIcons;