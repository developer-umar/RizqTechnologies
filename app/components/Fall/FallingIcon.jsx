"use client";
import { useRef, useEffect, useState } from 'react';
import Matter from 'matter-js';

const FallingIcons = ({ 
  icons = [], 
  gravity = 0.6, 
  mouseStiffness = 0.2 
}) => {
  const containerRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  // Intersection Observer to trigger animation only when in view
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 } // 20% section dikhte hi trigger hoga
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
        pixelRatio: typeof window !== 'undefined' ? window.devicePixelRatio : 1 // Better quality on mobile
      }
    });

    // Invisible boundaries
    const wallOptions = { isStatic: true, render: { visible: false } };
    const ground = Bodies.rectangle(width / 2, height + 25, width, 50, wallOptions);
    const leftWall = Bodies.rectangle(-25, height / 2, 50, height, wallOptions);
    const rightWall = Bodies.rectangle(width + 25, height / 2, 50, height, wallOptions);
    const ceiling = Bodies.rectangle(width / 2, -100, width, 50, wallOptions);

    // Optimized Icon Bodies
    const iconBodies = icons.map((url) => {
      // Adjusted size: 80px visual (scale 1.6 from 50px base)
      const radius = 40; 
      return Bodies.circle(
        Math.random() * (width - 100) + 50, 
        Math.random() * -600 - 100, // Spread them out vertically so they fall one by one
        radius, 
        {
          restitution: 0.4, // Bounciness
          friction: 0.1,
          density: 0.01,
          render: {
            sprite: {
              texture: url,
              xScale: 1.6, // Scale 1.6 makes it roughly 3x-4x larger than standard 25px icons
              yScale: 1.6
            }
          }
        }
      );
    });

    // Mouse Interaction
    const mouse = Mouse.create(render.canvas);
    const mouseConstraint = MouseConstraint.create(engine, {
      mouse: mouse,
      constraint: {
        stiffness: mouseStiffness,
        render: { visible: false }
      }
    });

    // Performance Optimization for Mobile
    // Disable mouse interaction on small screens to save resources
    if (window.innerWidth > 768) {
      World.add(engine.world, [mouseConstraint]);
    }

    World.add(engine.world, [ground, leftWall, rightWall, ceiling, ...iconBodies]);

    const runner = Runner.create();
    Runner.run(runner, engine);
    Render.run(render);

    return () => {
      Render.stop(render);
      World.clear(engine.world);
      Engine.clear(engine);
      if (render.canvas) render.canvas.remove();
      Runner.stop(runner);
    };
  }, [isVisible, icons, gravity, mouseStiffness]);

  return <div ref={containerRef} className="w-full h-full relative" />;
};

export default FallingIcons;