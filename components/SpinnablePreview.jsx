import React, { useState, useRef } from 'react';

export default function SpinnableBox({
  children,
  width = 250,
  height = 250,
  depth = 20,       // box thickness in px
}) {
  const [rotX, setRotX] = useState(20);
  const [rotY, setRotY] = useState(-15);
  const dragging = useRef(false);
  const lastPos  = useRef({ x: 0, y: 0 });
  const ref      = useRef();

  const onPointerDown = (e) => {
    dragging.current = true;
    lastPos.current = { x: e.clientX, y: e.clientY };
    ref.current.setPointerCapture(e.pointerId);
  };

  const onPointerMove = (e) => {
    if (!dragging.current) return;
    const dx = e.clientX - lastPos.current.x;
    const dy = e.clientY - lastPos.current.y;
    setRotY(y => y + dx * 0.5);
    setRotX(x => Math.max(-90, Math.min(90, x - dy * 0.5)));
    lastPos.current = { x: e.clientX, y: e.clientY };
  };

  const onPointerUp = (e) => {
    dragging.current = false;
    ref.current.releasePointerCapture(e.pointerId);
  };

  return (
    <div
      ref={ref}
      onPointerDown={onPointerDown}
      onPointerMove={onPointerMove}
      onPointerUp={onPointerUp}
      onPointerLeave={onPointerUp}
      style={{
        perspective: 600,
        width,
        height,
        userSelect: 'none',
        touchAction: 'none',
      }}
    >
      <div
        style={{
          position: 'relative',
          width: '100%',
          height: '100%',
          transformStyle: 'preserve-3d',
          transform: `rotateX(${rotX}deg) rotateY(${rotY}deg)`,
        }}
      >
        {/* FRONT */}
        <div
          style={{
            position: 'absolute',
            width: '100%',
            height: '100%',
            transform: `translateZ(${depth / 2}px)`,
            backfaceVisibility: 'hidden',
          }}
        >
          {children}
        </div>

        {/* BACK */}
        <div
          style={{
            position: 'absolute',
            width: '100%',
            height: '100%',
            background: 'green',
            transform: `rotateY(180deg) translateZ(${depth / 2}px)`,
            backfaceVisibility: 'hidden',
          }}
        />

        {/* TOP */}
        <div
          style={{
            position: 'absolute',
            width: '100%',
            height: `${depth}px`,
            background: 'black',
            transformOrigin: 'top center',
            transform: `rotateX(90deg) translateZ(${depth / 2}px)`,
          }}
        />

        {/* BOTTOM */}
        <div
          style={{
            position: 'absolute',
            width: '100%',
            height: `${depth}px`,
            bottom: 0,
            background: 'black',
            transformOrigin: 'bottom center',
            transform: `rotateX(-90deg) translateZ(${depth / 2}px)`,
          }}
        />

        {/* LEFT */}
        <div
          style={{
            position: 'absolute',
            width: `${depth}px`,
            height: '100%',
            left: 0,
            background: 'black',
            transformOrigin: 'left center',
            transform: `rotateY(-90deg) translateZ(${depth / 2}px)`,
          }}
        />

        {/* RIGHT */}
        <div
          style={{
            position: 'absolute',
            width: `${depth}px`,
            height: '100%',
            right: 0,
            background: 'black',
            transformOrigin: 'right center',
            transform: `rotateY(90deg) translateZ(${depth / 2}px)`,
          }}
        />
      </div>
    </div>
  );
}
