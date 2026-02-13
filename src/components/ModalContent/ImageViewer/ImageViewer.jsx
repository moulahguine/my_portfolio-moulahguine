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
    <figure className={`imageViewer__frame ${className}`}>
      <figcaption className="sr-only">{alt}</figcaption>
      <Image
        src={src}
        alt={alt}
        fill={fill}
        sizes={sizes}
        onContextMenu={(e) => e.preventDefault()}
        style={{ ...style }}
      />
    </figure>
  );
}
