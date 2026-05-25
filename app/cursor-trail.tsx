"use client";

import { useEffect, useRef } from "react";

const HEAD_R       = 10;    // bigger cursor dot
const FADE_MS      = 500;   // trail dissolves over 500ms after last move

export default function CursorTrail() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const pts       = useRef<{ x: number; y: number; t: number }[]>([]);
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
      pts.current     = [{ x: e.clientX, y: e.clientY, t: Date.now() }, ...pts.current];
    };
    const onLeave = () => { visible.current = false; };
    const onEnter = () => { visible.current = true; };

    window.addEventListener("mousemove", onMove);
    document.addEventListener("mouseleave", onLeave);
    document.addEventListener("mouseenter", onEnter);

    const tick = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const now = Date.now();

      // Drop expired trail points
      pts.current = pts.current.filter(p => now - p.t < FADE_MS);

      if (visible.current || pts.current.length > 0) {
        // Trail — drawn oldest to newest so newer dots render on top
        [...pts.current].reverse().forEach(p => {
          const age   = (now - p.t) / FADE_MS;        // 0 = fresh, 1 = gone
          const alpha = (1 - age) * 0.55;
          const r     = HEAD_R * (0.3 + 0.7 * (1 - age));

          ctx.beginPath();
          ctx.arc(p.x, p.y, r, 0, Math.PI * 2);
          ctx.fillStyle = `hsla(22, 95%, 58%, ${alpha})`;
          ctx.fill();
        });

        // Cursor head — solid orange dot
        if (visible.current) {
          const { x, y } = mouse.current;
          ctx.beginPath();
          ctx.arc(x, y, HEAD_R, 0, Math.PI * 2);
          ctx.fillStyle = "hsla(22, 95%, 58%, 0.75)";
          ctx.fill();
        }
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
