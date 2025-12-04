"use client";

import { useEffect, useRef } from "react";
import "./VideoViewer.scss";

export default function VideoViewer({
  src,
  layoutId = "video-modal",
  className = "myvideo_intro",
  autoplayInline = true,
  loop = true,
  playsInline = true,
  preload = "none",
  isOpen,
}) {
  const videoRef = useRef(null);

  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;

    if (isOpen) {
      v.muted = false;
      v.controls = true;
      v.currentTime = 0;
      v.play().catch(() => {});
    } else if (autoplayInline) {
      v.pause();
      v.currentTime = 0;
      v.muted = true;
      v.controls = false;
      v.play().catch(() => {});
    } else {
      v.pause();
      v.currentTime = 0;
      v.muted = true;
      v.controls = false;
    }
  }, [isOpen, autoplayInline]);

  return (
    <div className="videoViewer">
      <div
        layout
        layoutId={layoutId}
        className={`videoViewer__frame ${isOpen ? "is-open" : ""}`}
      >
        <video
          ref={videoRef}
          className={className}
          src={src}
          muted
          loop={loop}
          playsInline={playsInline}
          preload={preload}
        />
      </div>
    </div>
  );
}


