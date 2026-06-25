"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import dynamic from "next/dynamic";

// video2ascii uses WebGL — must be client-only, no SSR
const V2A = dynamic(() => import("video2ascii"), {
  ssr: false,
  loading: () => <div style={{ width: "100%", height: "100%", background: "#0a0a0a" }} />,
});

interface Props {
  // Single src OR a playlist. When a playlist is supplied, videos play one
  // after the other and loop back to the beginning after the last clip.
  src: string | string[];
}

export default function AsciiVideo({ src }: Props) {
  const playlist = Array.isArray(src) ? src : [src];
  const [index, setIndex] = useState(0);
  const wrapRef = useRef<HTMLDivElement>(null);

  // Advance to next clip (or loop back) when the hidden <video> fires "ended"
  const advance = useCallback(() => {
    setIndex((i) => (i + 1) % playlist.length);
  }, [playlist.length]);

  // Attach "ended" listener to the hidden <video> rendered by video2ascii.
  // We poll briefly after mount because the element is created asynchronously.
  useEffect(() => {
    if (playlist.length <= 1) return;

    let video: HTMLVideoElement | null = null;
    let attempts = 0;

    const attach = () => {
      video = wrapRef.current?.querySelector("video") ?? null;
      if (video) {
        video.addEventListener("ended", advance);
      } else if (attempts < 30) {
        attempts++;
        setTimeout(attach, 200);
      }
    };

    attach();

    return () => {
      video?.removeEventListener("ended", advance);
    };
  }, [index, advance, playlist.length]);

  return (
    // key forces a clean remount of V2A each time the clip changes,
    // so video2ascii reinitialises WebGL with the new src.
    <div ref={wrapRef} style={{ width: "100%", height: "100%" }}>
      <V2A
        key={`${index}-${playlist[index]}`}
        src={playlist[index]}
        numColumns={160}
        colored
        brightness={1.05}
        charset="detailed"
        autoPlay
        isPlaying
        enableMouse
        enableRipple
        rippleSpeed={45}
        trailLength={18}
        audioEffect={0}
      />
    </div>
  );
}
