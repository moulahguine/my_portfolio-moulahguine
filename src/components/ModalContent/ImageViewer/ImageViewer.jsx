import Image from "next/image";
// Styles
import "./ImageViewer.scss";

// Component
export default function ImageViewer({ src, alt, className = "", style }) {
  return (
    // Figure is used to display the image
    <figure className={`imageViewer__frame ${className}`}>
      <Image
        src={src}
        alt={"Enlarged image preview"}
        fill
        onContextMenu={(e) => e.preventDefault()}
        style={{ ...style }}
        className="frame__image"
      />
      <figcaption className="sr-only">Enlarged image preview</figcaption>
    </figure>
  );
}
