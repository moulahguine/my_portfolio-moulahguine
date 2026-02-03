"use client";

import { useState, useCallback, useRef } from "react";
import { Modal, DefaultContent } from "@/components";
import { QRCodeSVG } from "qrcode.react";
import heroImage from "@/assets/images/hero-section/hero-img.png";
import { PiShareFatLight } from "react-icons/pi";
import { toPng } from "html-to-image";

const CANONICAL_URL = "https://mohamedoulahguine.com";

export default function SharePortfolio({ renderTrigger }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [downloaded, setDownloaded] = useState(false);
  const cardRef = useRef(null);

  const handleDownload = useCallback(async () => {
    if (!cardRef.current) return;
    try {
      const dataUrl = await toPng(cardRef.current, {
        pixelRatio: 2,
        cacheBust: true,
        backgroundColor: "#f3f3f4", // fallback if card background is transparent
        skipFonts: true,
        filter: (node) => node.tagName?.toLowerCase() !== "image",
      });
      const a = document.createElement("a");
      a.href = dataUrl;
      a.download = "share-portfolio.png";
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      setDownloaded(true);
      setTimeout(() => setDownloaded(false), 2000);
    } catch (err) {
      console.error("Download failed:", err);
      setDownloaded(false);
    }
  }, []);

  const qrImageSrc =
    typeof window !== "undefined"
      ? `${window.location.origin}${heroImage.src}`
      : heroImage.src;

  const open = () => setIsModalOpen(true);

  return (
    <>
      {renderTrigger ? (
        renderTrigger({ open })
      ) : (
        <button
          className="share-portfolio-trigger-btn"
          onClick={open}
          aria-label="Share portfolio"
          type="button"
          title="Share portfolio"
        >
          <span className="share-portfolio__icon" aria-hidden="true">
            <PiShareFatLight size={18} />
          </span>
        </button>
      )}

      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title="Share portfolio"
        size="small"
        showHeader={false}
      >
        <DefaultContent className="share-portfolio-modal">
          {/* <div ref={cardRef} className="modal__screenshot"> */}
          <div ref={cardRef} className="qr">
            <QRCodeSVG
              value={CANONICAL_URL}
              size={300}
              level="H"
              marginSize={0}
              imageSettings={{
                src: qrImageSrc,
                height: 40,
                width: 40,
                excavate: true,
              }}
              aria-label="QR code to portfolio"
            />
          </div>
          <button
            type="button"
            className="download-btn"
            onClick={handleDownload}
            aria-label={downloaded ? "Downloaded" : "Download card"}
          >
            {downloaded ? "Downloaded!" : "Download"}
          </button>
          {/* </div> */}
        </DefaultContent>
      </Modal>
    </>
  );
}
