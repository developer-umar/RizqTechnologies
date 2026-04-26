"use client";
import { useRef, useEffect, useState } from 'react';
import Matter from 'matter-js';

const FallingIcons = ({ 
  icons = [], 
  gravity = 0.6, 
  mouseStiffness = 0.2 
}) => {
  const containerRef = useRef(null);
  const engineRef = useRef(Matter.Engine.create());

  useEffect(() => {
    if (!containerRef.current) return;

    const { Engine, Render, World, Bodies, Runner, Mouse, MouseConstraint } = Matter;
    const engine = engineRef.current;
    const container = containerRef.current;
    
    // Get container dimensions
    const width = container.clientWidth;
    const height = container.clientHeight;

    const render = Render.create({
      element: container,
      engine: engine,
      options: {
        width,
        height,
        background: 'transparent',
        wireframes: false, // Isse icons asli dikhenge, lines nahi
      }
    });

    // Invisible boundaries so icons stay inside the box
    const wallOptions = { isStatic: true, render: { visible: false } };
    const ground = Bodies.rectangle(width / 2, height + 25, width, 50, wallOptions);
    const leftWall = Bodies.rectangle(-25, height / 2, 50, height, wallOptions);
    const rightWall = Bodies.rectangle(width + 25, height / 2, 50, height, wallOptions);
    const ceiling = Bodies.rectangle(width / 2, -100, width, 50, wallOptions);

    // Create Icon Bodies
    const iconBodies = icons.map((url) => {
      return Bodies.circle(
        Math.random() * (width - 100) + 50, 
        Math.random() * -500, // Starting high above for the "falling" effect
        25, // Radius
        {
          restitution: 0.5,
          friction: 0.1,
          render: {
            sprite: {
              texture: url,
              xScale: 1, // Adjust scale if icons are too big/small
              yScale: 1
            }
          }
        }
      );
    });

    // Interactivity: Drag icons with mouse
    const mouse = Mouse.create(render.canvas);
    const mouseConstraint = MouseConstraint.create(engine, {
      mouse: mouse,
      constraint: {
        stiffness: mouseStiffness,
        render: { visible: false }
      }
    });

    World.add(engine.world, [ground, leftWall, rightWall, ceiling, mouseConstraint, ...iconBodies]);

    // Run the engine and renderer
    const runner = Runner.create();
    Runner.run(runner, engine);
    Render.run(render);

    // Cleanup on unmount
    return () => {
      Render.stop(render);
      World.clear(engine.world);
      Engine.clear(engine);
      render.canvas.remove();
      Runner.stop(runner);
    };
  }, [icons, gravity, mouseStiffness]);

  return <div ref={containerRef} className="w-full h-full relative" />;
};

export default FallingIcons;