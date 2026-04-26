"use client";
import { useRef, useState, useEffect } from 'react';
import Matter from 'matter-js';

const FallingText = ({
  text = '',
  highlightWords = [],
  trigger = 'auto',
  backgroundColor = 'transparent',
  wireframes = false,
  gravity = 1,
  mouseConstraintStiffness = 0.2,
  fontSize = '2rem'
}) => {
  const containerRef = useRef(null);
  const textRef = useRef(null);
  const canvasContainerRef = useRef(null);
  const [effectStarted, setEffectStarted] = useState(false);

  // 1. Setup the HTML Spans
  useEffect(() => {
    if (!textRef.current) return;
    const words = text.split(' ');

    const newHTML = words
      .map(word => {
        const isHighlighted = highlightWords.some(hw => word.includes(hw));
        return `<span 
          class="inline-block mx-[6px] my-[4px] select-none leading-none tracking-tighter ${
            isHighlighted ? 'text-yellow-400 font-black' : 'text-white font-semibold opacity-70'
          }"
        >
          ${word}
        </span>`;
      })
      .join(' ');

    textRef.current.innerHTML = newHTML;
  }, [text, highlightWords]);

  // 2. Trigger Logic
  useEffect(() => {
    if (trigger === 'auto') {
      setEffectStarted(true);
      return;
    }
    if (trigger === 'scroll' && containerRef.current) {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setEffectStarted(true);
            observer.disconnect();
          }
        },
        { threshold: 0.1 }
      );
      observer.observe(containerRef.current);
      return () => observer.disconnect();
    }
  }, [trigger]);

  // 3. Physics Engine (Matter.js)
  useEffect(() => {
    if (!effectStarted || !containerRef.current) return;

    const { Engine, Render, World, Bodies, Runner, Mouse, MouseConstraint } = Matter;
    const containerRect = containerRef.current.getBoundingClientRect();
    const width = containerRect.width;
    const height = containerRect.height;

    const engine = Engine.create();
    engine.world.gravity.y = gravity;

    const render = Render.create({
      element: canvasContainerRef.current,
      engine,
      options: {
        width,
        height,
        background: backgroundColor,
        wireframes
      }
    });

    // Boundaries
    const floor = Bodies.rectangle(width / 2, height + 25, width, 50, { isStatic: true });
    const leftWall = Bodies.rectangle(-25, height / 2, 50, height, { isStatic: true });
    const rightWall = Bodies.rectangle(width + 25, height / 2, 50, height, { isStatic: true });
    const ceiling = Bodies.rectangle(width / 2, -25, width, 50, { isStatic: true });

    // Create bodies for each word
    const wordSpans = textRef.current.querySelectorAll('span');
    const wordBodies = [...wordSpans].map(elem => {
      const rect = elem.getBoundingClientRect();
      const x = rect.left - containerRect.left + rect.width / 2;
      const y = rect.top - containerRect.top + rect.height / 2;

      const body = Bodies.rectangle(x, y, rect.width, rect.height, {
        restitution: 0.6,
        friction: 0.1,
        render: { fillStyle: 'transparent' }
      });

      Matter.Body.setVelocity(body, { x: (Math.random() - 0.5) * 4, y: 0 });
      return { elem, body };
    });

    // Mouse control
    const mouse = Mouse.create(containerRef.current);
    const mouseConstraint = MouseConstraint.create(engine, {
      mouse,
      constraint: { stiffness: mouseConstraintStiffness, render: { visible: false } }
    });

    World.add(engine.world, [floor, leftWall, rightWall, ceiling, mouseConstraint, ...wordBodies.map(wb => wb.body)]);

    const runner = Runner.create();
    Runner.run(runner, engine);
    Render.run(render);

    const update = () => {
      wordBodies.forEach(({ body, elem }) => {
        const { x, y } = body.position;
        elem.style.position = 'absolute';
        elem.style.left = `${x}px`;
        elem.style.top = `${y}px`;
        elem.style.transform = `translate(-50%, -50%) rotate(${body.angle}rad)`;
      });
      requestAnimationFrame(update);
    };
    update();

    return () => {
      Render.stop(render);
      Runner.stop(runner);
      Engine.clear(engine);
      World.clear(engine.world);
    };
  }, [effectStarted, gravity, mouseConstraintStiffness, backgroundColor, wireframes]);

  return (
    <div ref={containerRef} className="relative w-full h-full overflow-hidden bg-transparent">
      <div ref={textRef} className="flex flex-wrap justify-center p-10" style={{ fontSize }} />
      <div ref={canvasContainerRef} className="absolute inset-0 pointer-events-none" />
    </div>
  );
};

export default FallingText;