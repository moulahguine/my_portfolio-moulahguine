"use client";

import { useState, useCallback } from "react";
import { Modal, DefaultContent } from "@/components";
import { QRCodeSVG } from "qrcode.react";
import heroImage from "@/assets/images/hero-section/hero-img.png";
import { PiShareFatLight } from "react-icons/pi";
import VerifiedBadge from "@/components/Icons/VerifiedBadge";

const PORTFOLIO_USERNAME = "Mohamed Oulahguine";
const CANONICAL_URL = "https://mohamedoulahguine.com";

export default function SharePortfolio({ renderTrigger }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleCopyLink = useCallback(async () => {
    const url =
      typeof window !== "undefined" ? window.location.href : CANONICAL_URL;
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(false);
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
          <div className="share-portfolio-modal__content">
            <h1 className="share-portfolio-modal__username">
              {PORTFOLIO_USERNAME}
              <VerifiedBadge
                className="verified-badge"
                width={25}
                height={25}
              />
            </h1>
            <div className="share-portfolio-modal__qr">
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
            <p className="share-portfolio-modal__label">Share portfolio</p>

            <button
              type="button"
              className="share-portfolio-modal__copy-btn"
              onClick={handleCopyLink}
              aria-label={copied ? "Link copied" : "Copy link"}
            >
              {copied ? "Copied!" : "Copy link"}
            </button>
          </div>
        </DefaultContent>
      </Modal>
    </>
  );
}
