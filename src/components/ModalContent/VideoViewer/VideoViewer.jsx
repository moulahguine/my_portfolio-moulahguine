"use client";

// React
import { useEffect, useRef } from "react";

// Styles
import "./VideoViewer.scss";

// Component
export default function VideoViewer({
  src,
  className = "myvideo__intro",
  autoplayInline = false,
  loop = false,
  playsInline = false,
  preload = "none",
  isOpen,
  volume = 1,
}) {
  const videoRef = useRef(null);

  // Use effect to handle video playback
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // If the video is open, play the video
    if (isOpen) {
      video.muted = false;
      video.volume = Math.min(Math.max(volume, 0), 1);
      video.controls = true;
      video.currentTime = 0;
      // Play the video
      video.play().catch(() => {
        console.error("Failed to play video");
      });
      // If the video is not open, pause the video
    } else if (autoplayInline) {
      video.pause();
      video.currentTime = 0;
      video.muted = true;
      video.controls = false;
      // Play the video
      video.play().catch(() => {
        console.error("Failed to play video");
      });
      // If the video is not open and autoplay is not enabled, pause the video
    } else {
      video.pause();
      video.currentTime = 0;
      video.muted = true;
      video.controls = false;
    }
  }, [isOpen, autoplayInline, volume]);

  return (
    // Video viewer
    <div className="videoViewer">
      {/* Video viewer frame  */}
      <div className={`videoViewer__frame ${isOpen ? "is-open" : ""}`}>
        {/* Video element  */}
        <video
          ref={videoRef}
          className={className}
          src={src}
          muted
          loop={loop}
          playsInline={playsInline}
          preload={preload}
          sizes="(max-width: 768px) 100vw, 100vw"
          quality={100}
        />
      </div>
    </div>
  );
}
