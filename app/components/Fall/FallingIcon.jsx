"use client";
import { useRef, useEffect, useState } from 'react';
import Matter from 'matter-js';

const FallingIcons = ({ icons = [] }) => {
  const containerRef = useRef(null);
  const engineRef = useRef(null);
  const renderRef = useRef(null);
  const runnerRef = useRef(null);
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
    
    // Create Engine
    const engine = Engine.create();
    engineRef.current = engine;
    engine.world.gravity.y = 1.2; // Optimized falling speed

    const container = containerRef.current;
    const width = container.clientWidth;
    const height = container.clientHeight;

    // Create Renderer
    const render = Render.create({
      element: container,
      engine: engine,
      options: {
        width,
        height,
        background: 'transparent',
        wireframes: false,
        pixelRatio: 1 // Performance boost for mobile
      }
    });
    renderRef.current = render;

    // Boundaries - Heavy boundaries to prevent "ghosting"
    const wallOptions = { isStatic: true, render: { visible: false } };
    World.add(engine.world, [
      Bodies.rectangle(width / 2, height + 25, width, 50, wallOptions), // Floor
      Bodies.rectangle(-25, height / 2, 50, height, wallOptions),      // Left
      Bodies.rectangle(width + 25, height / 2, 50, height, wallOptions),// Right
      Bodies.rectangle(width / 2, -500, width, 50, wallOptions)        // Top ceiling
    ]);

    // Create Icons - Reduced size by 30% (Radius 28 instead of 40)
    const iconBodies = icons.map((url, index) => {
      return Bodies.circle(
        Math.random() * (width - 100) + 50, 
        Math.random() * -300 - 50, // Icons start closer to the top for instant fall
        28, // Body Radius
        {
          restitution: 0.5,
          friction: 0.1,
          render: {
            sprite: {
              texture: url,
              xScale: 0.9, // Visual scale reduced to match body
              yScale: 0.9
            }
          }
        }
      );
    });

    World.add(engine.world, iconBodies);

    // Mouse Interaction
    if (window.innerWidth > 768) {
      const mouse = Mouse.create(render.canvas);
      const mouseConstraint = MouseConstraint.create(engine, {
        mouse: mouse,
        constraint: { stiffness: 0.2, render: { visible: false } }
      });
      World.add(engine.world, mouseConstraint);
    }

    // Run Engine & Render
    const runner = Runner.create();
    runnerRef.current = runner;
    Runner.run(runner, engine);
    Render.run(render);

    return () => {
      if (runnerRef.current) Runner.stop(runnerRef.current);
      if (renderRef.current) {
        Render.stop(renderRef.current);
        renderRef.current.canvas.remove();
      }
      if (engineRef.current) World.clear(engineRef.current.world);
    };
  }, [isVisible, icons]);

  return <div ref={containerRef} className="w-full h-full relative" />;
};

export default FallingIcons;