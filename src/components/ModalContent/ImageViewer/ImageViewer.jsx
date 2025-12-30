"use client";

import Image from "next/image";
import "./ImageViewer.scss";

export default function ImageViewer({
  src,
  alt,
  fill = true,
  sizes = "(max-width: 778px) 100vw, 80vw",
  className = "",
  style,
}) {
  return (
    <div className={`imageViewer ${className}`}>
      <div className="imageViewer__frame">
        <Image
          src={src}
          alt={alt}
          fill={fill}
          sizes={sizes}
          onContextMenu={(e) => e.preventDefault()}
          style={{ ...style }}
        />
      </div>
    </div>
  );
}
