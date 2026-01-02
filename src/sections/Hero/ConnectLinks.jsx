"use client";

import { useState } from "react";
import Modal from "@/components/Modal/Modal";
import { DefaultContent } from "@/components/ModalContent";
import socialLinks from "@/components/SocialLinks/socialLinksData";
import { FiShare2 } from "react-icons/fi";

export default function ConnectLinks() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <button
        className="social-trigger-btn"
        onClick={() => setIsModalOpen(true)}
        aria-label="Open social links"
        type="button"
        title="Open social links"
      >
        <span className="social__icon" aria-hidden="true">
          <FiShare2 size={18} />
        </span>
      </button>

      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title="Find Me Online"
        size="small"
      >
        <DefaultContent>
          <div className="social-links-grid">
            {socialLinks.map((social) => {
              const Icon = social.icon;
              return (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link-item"
                  aria-label={`${social.label} (opens in new tab)`}
                  title={social.label}
                  style={{ "--hover-color": social.color }}
                >
                  <span className="social-link-icon">
                    <Icon size={22} />
                  </span>
                  <span className="social-link-label">{social.label}</span>
                </a>
              );
            })}
          </div>
        </DefaultContent>
      </Modal>
    </>
  );
}
