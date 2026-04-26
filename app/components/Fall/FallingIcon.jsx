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
    if (!isVisible || !containerRef.current || icons.length === 0) return;

    const { Engine, Render, World, Bodies, Runner, Mouse, MouseConstraint } = Matter;
    const engine = Engine.create();
    engine.world.gravity.y = 1.0; 

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

    // Invisible Walls
    const wallOptions = { isStatic: true, render: { visible: false } };
    World.add(engine.world, [
      Bodies.rectangle(width / 2, height + 25, width, 50, wallOptions),
      Bodies.rectangle(-25, height / 2, 50, height, wallOptions),
      Bodies.rectangle(width + 25, height / 2, 50, height, wallOptions),
      Bodies.rectangle(width / 2, -100, width, 50, wallOptions)
    ]);

    // PRE-LOAD IMAGES BEFORE STARTING PHYSICS
    const promises = icons.map((url) => {
      return new Promise((resolve) => {
        const img = new Image();
        img.src = url;
        img.onload = () => resolve({ url, width: img.width, height: img.height });
      });
    });

    Promise.all(promises).then((loadedIcons) => {
      const iconBodies = loadedIcons.map((icon, index) => {
        // Normal size (roughly 50-60px)
        const radius = 30;
        
        return Bodies.circle(
          Math.random() * (width - 100) + 50,
          Math.random() * -400 - 50, // Dropping from just above
          radius,
          {
            restitution: 0.5,
            friction: 0.1,
            render: {
              sprite: {
                texture: icon.url,
                // Automatically scale icons to fit the 30px radius body
                xScale: (radius * 2) / 128, 
                yScale: (radius * 2) / 128
              }
            }
          }
        );
      });

      World.add(engine.world, iconBodies);
    });

    if (window.innerWidth > 768) {
      const mouse = Mouse.create(render.canvas);
      const mouseConstraint = MouseConstraint.create(engine, {
        mouse: mouse,
        constraint: { stiffness: 0.2, render: { visible: false } }
      });
      World.add(engine.world, mouseConstraint);
    }

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
  }, [isVisible, icons]);

  return <div ref={containerRef} className="w-full h-full relative" />;
};

export default FallingIcons;