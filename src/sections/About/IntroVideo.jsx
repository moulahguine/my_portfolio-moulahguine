"use client";
import VideoModal from "@/components/VideoModal/VideoModal";

export default function IntroVideo() {
  return (
    <VideoModal>
      {(videoRef) => (
        <video
          ref={videoRef}
          className="myvideo_intro"
          src="https://res.cloudinary.com/dauiexg9k/video/upload/v1730982387/backgroundHero_ytckhd.mp4"
          muted
          loop
          playsInline
          preload="none"
        />
      )}
    </VideoModal>
  );
}
