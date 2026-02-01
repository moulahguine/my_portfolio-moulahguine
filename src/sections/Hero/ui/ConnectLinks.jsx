"use client";

import { useState } from "react";
import { Modal, DefaultContent } from "@/components";
import socialLinksData from "@/data/socialLinksData";
import { RxPerson } from "react-icons/rx";

export default function ConnectLinks({ renderTrigger }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const open = () => setIsModalOpen(true);

  return (
    <>
      {renderTrigger
        ? renderTrigger({ open })
        : (
          <button
            className="social-trigger-btn"
            onClick={open}
            aria-label="Open social links"
            type="button"
            title="Open social links"
          >
            <span className="social__icon" aria-hidden="true">
              <RxPerson size={18} />
            </span>
          </button>
        )}

      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title="Find Me Online"
        size="small"
      >
        <DefaultContent>
          <div className="social-links-grid">
            {socialLinksData.map((social) => {
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
