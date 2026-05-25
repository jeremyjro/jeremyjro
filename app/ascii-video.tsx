"use client";

import dynamic from "next/dynamic";

// video2ascii uses WebGL — must be client-only, no SSR
const V2A = dynamic(() => import("video2ascii"), {
  ssr: false,
  loading: () => <div style={{ width: "100%", height: "100%", background: "#0a0a0a" }} />,
});

export default function AsciiVideo({ src }: { src: string }) {
  return (
    <V2A
      src={src}
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
  );
}
