"use client";

import { useEffect, useRef } from "react";

// Color theory: trail rotates ~180° around the color wheel (warm → cool).
// Starting hue: 28° (amber) — matches the site's warm accent palette.
// Each trail dot steps 8° forward, so across 22 dots the trail covers
// amber → yellow-green → teal → blue — a warm-to-cool analogous sweep
// that demonstrates complementary contrast at its tail end.
const TRAIL_LEN  = 22;
const BASE_HUE   = 28;   // amber
const HUE_STEP   = 8;    // degrees per dot
const HEAD_R     = 4.5;  // cursor dot radius (px)

export default function CursorTrail() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const pts       = useRef<{ x: number; y: number }[]>([]);
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
      visible.current   = true;
      mouse.current     = { x: e.clientX, y: e.clientY };
      pts.current       = [{ x: e.clientX, y: e.clientY }, ...pts.current].slice(0, TRAIL_LEN);
    };
    const onLeave = () => { visible.current = false; };
    const onEnter = () => { visible.current = true; };

    window.addEventListener("mousemove", onMove);
    document.addEventListener("mouseleave", onLeave);
    document.addEventListener("mouseenter", onEnter);

    const tick = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      if (visible.current) {
        // Trail dots (oldest → freshest, drawn back to front)
        [...pts.current].reverse().forEach((p, ri) => {
          const i     = TRAIL_LEN - 1 - ri;
          const t     = i / TRAIL_LEN;
          const hue   = (BASE_HUE + i * HUE_STEP) % 360;
          const r     = HEAD_R * (1 - t * 0.65);
          const alpha = (1 - t) * 0.85;

          ctx.beginPath();
          ctx.arc(p.x, p.y, r, 0, Math.PI * 2);
          ctx.fillStyle = `hsla(${hue}, 82%, 58%, ${alpha})`;
          ctx.fill();
        });

        // Cursor head — solid amber dot
        const { x, y } = mouse.current;
        ctx.beginPath();
        ctx.arc(x, y, HEAD_R, 0, Math.PI * 2);
        ctx.fillStyle = `hsl(${BASE_HUE}, 88%, 62%)`;
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
