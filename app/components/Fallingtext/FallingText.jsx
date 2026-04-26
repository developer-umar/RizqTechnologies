"use client";
import { useRef, useState, useEffect } from 'react';
import Matter from 'matter-js';

const FallingIcons = ({ 
  icons = [], // Array of icon URLs
  gravity = 0.8,
  mouseStiffness = 0.1 
}) => {
  const containerRef = useRef(null);
  const canvasRef = useRef(null);
  const engineRef = useRef(Matter.Engine.create());

  useEffect(() => {
    if (!containerRef.current) return;

    const { Engine, Render, World, Bodies, Runner, Mouse, MouseConstraint } = Matter;
    const engine = engineRef.current;
    const container = containerRef.current;
    const { width, height } = container.getBoundingClientRect();

    const render = Render.create({
      element: container,
      engine: engine,
      options: {
        width,
        height,
        background: 'transparent',
        wireframes: false, // Set to true for debugging
      }
    });

    // Boundaries
    const ground = Bodies.rectangle(width / 2, height + 25, width, 50, { isStatic: true });
    const leftWall = Bodies.rectangle(-25, height / 2, 50, height, { isStatic: true });
    const rightWall = Bodies.rectangle(width + 25, height / 2, 50, height, { isStatic: true });

    // Create Icon Bodies
    const iconBodies = icons.map((iconUrl) => {
      const x = Math.random() * width;
      const y = Math.random() * -500; // Start above screen
      
      return Bodies.circle(x, y, 25, { // 25 is radius (50px size)
        restitution: 0.6,
        friction: 0.1,
        render: {
          sprite: {
            texture: iconUrl,
            xScale: 0.5, // Adjust based on icon size
            yScale: 0.5
          }
        }
      });
    });

    // Mouse control
    const mouse = Mouse.create(render.canvas);
    const mouseConstraint = MouseConstraint.create(engine, {
      mouse: mouse,
      constraint: { stiffness: mouseStiffness, render: { visible: false } }
    });

    World.add(engine.world, [ground, leftWall, rightWall, mouseConstraint, ...iconBodies]);

    Runner.run(Runner.create(), engine);
    Render.run(render);

    return () => {
      Render.stop(render);
      World.clear(engine.world);
      Engine.clear(engine);
      render.canvas.remove();
    };
  }, [icons, gravity, mouseStiffness]);

  return <div ref={containerRef} className="w-full h-full cursor-grab active:cursor-grabbing" />;
};

export default FallingIcons;