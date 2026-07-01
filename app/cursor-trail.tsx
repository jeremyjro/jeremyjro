"use client";

import { useEffect, useRef } from "react";

const HEAD_R = 6;

export default function CursorTrail() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouse     = useRef({ x: -300, y: -300 });
  const visible   = useRef(false);
  const raf       = useRef<number>(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resize = () => {
      canvas.width  = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    const onMove = (e: MouseEvent) => {
      visible.current = true;
      mouse.current   = { x: e.clientX, y: e.clientY };
    };
    const onLeave = () => { visible.current = false; };
    const onEnter = () => { visible.current = true; };

    window.addEventListener("mousemove", onMove);
    document.addEventListener("mouseleave", onLeave);
    document.addEventListener("mouseenter", onEnter);

    const tick = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      if (visible.current) {
        const { x, y } = mouse.current;
        ctx.beginPath();
        ctx.arc(x, y, HEAD_R, 0, Math.PI * 2);
        ctx.fillStyle = "hsl(30, 100%, 50%)";
        ctx.fill();
      }

      raf.current = requestAnimationFrame(tick);
    };
    tick();

    return () => {
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseleave", onLeave);
      document.removeEventListener("mouseenter", onEnter);
      cancelAnimationFrame(raf.current);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "fixed",
        inset: 0,
        pointerEvents: "none",
        zIndex: 9999,
      }}
    />
  );
}
