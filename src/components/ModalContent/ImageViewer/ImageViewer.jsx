"use client";

// React
// Components
import Image from "next/image";
// Styles
import "./ImageViewer.scss";

// Component
export default function ImageViewer({
  src,
  alt,

  sizes = "(max-width: 778px) 100vw, 80vw",
  className = "",
  style,
}) {
  return (
    // Figure is used to display the image
    <figure className={`imageViewer__frame ${className}`}>
      <div className="imageViewer__frame-image">
        <Image
          src={src}
          alt={alt}
          width={1000}
          height={1000}
          sizes={sizes}
          onContextMenu={(e) => e.preventDefault()}
          style={{ ...style }}
        />
      </div>
      <figcaption className="sr-only">{alt}</figcaption>
    </figure>
  );
}
