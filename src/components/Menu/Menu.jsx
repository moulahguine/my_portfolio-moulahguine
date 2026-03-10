"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { useTheme } from "next-themes";
import {
  HiOutlineMoon,
  HiOutlineSun,
  HiOutlineChatBubbleLeftRight,
} from "react-icons/hi2";
import { RxPerson } from "react-icons/rx";
import { PiShareFatLight } from "react-icons/pi";
import ConnectLinks from "@/components/ConnectLinks/ConnectLinks";
import SharePortfolio from "@/components/SharePortfolio/SharePortfolio";
import "./Menu.scss";

export default function Menu() {
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  const panelRef = useRef(null);
  const triggerRef = useRef(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!isOpen) return;

    function handlePointerDown(event) {
      const target = event.target;
      const targetElement = target instanceof Element ? target : null;

      const clickedInsideModal = targetElement?.closest(
        ".modal__overlay, .modal__container"
      );
      if (clickedInsideModal) return;

      const clickedInsidePanel =
        panelRef.current && panelRef.current.contains(target);

      const clickedOnTrigger =
        triggerRef.current && triggerRef.current.contains(target);

      if (!clickedInsidePanel && !clickedOnTrigger) {
        setIsOpen(false);
      }
    }

    function handleKeyDown(event) {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    }

    document.addEventListener("pointerdown", handlePointerDown);
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("pointerdown", handlePointerDown);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  const currentTheme = theme || "dark";

  const switchTheme = (newTheme) => {
    if (!mounted || currentTheme === newTheme) return;
    setTheme(newTheme);
  };

  return (
    <div className="menu">
      <button
        ref={triggerRef}
        type="button"
        className={`menu__trigger ${isOpen ? "menu__trigger--active" : ""}`}
        onClick={() => setIsOpen((prev) => !prev)}
        aria-label={isOpen ? "Close menu" : "Open menu"}
        aria-expanded={isOpen}
        aria-haspopup="dialog"
      >
        <span className="menu__trigger-line menu__trigger-line--first"></span>
        <span className="menu__trigger-line menu__trigger-line--second"></span>
        <span className="menu__trigger-line menu__trigger-line--third"></span>
      </button>

      {isOpen && (
        <div
          ref={panelRef}
          className="menu__panel"
          role="dialog"
          aria-modal="false"
        >
          <section className="menu__section">
            <h2 className="menu__section-title">Theme</h2>

            <div className="menu__theme-options">
              <button
                type="button"
                className={`menu__theme-btn ${
                  currentTheme === "dark" ? "menu__theme-btn--active" : ""
                }`}
                onClick={() => {
                  switchTheme("dark");
                  setIsOpen(false);
                }}
              >
                <HiOutlineMoon size={16} aria-hidden="true" />
                <span className="menu__theme-label">Dark</span>
              </button>

              <button
                type="button"
                className={`menu__theme-btn ${
                  currentTheme === "light" ? "menu__theme-btn--active" : ""
                }`}
                onClick={() => {
                  switchTheme("light");
                  setIsOpen(false);
                }}
              >
                <HiOutlineSun size={16} aria-hidden="true" />
                <span className="menu__theme-label">Light</span>
              </button>
            </div>
          </section>

          <section className="menu__section">
            <h2 className="menu__section-title">Contact & Share</h2>

            <div className="menu__links">
              <ConnectLinks
                renderTrigger={({ open }) => (
                  <button
                    type="button"
                    className="menu__link-btn menu__link-btn--social"
                    onClick={open}
                  >
                    <RxPerson size={16} aria-hidden="true" />
                    Social Links
                  </button>
                )}
              />

              <SharePortfolio
                renderTrigger={({ open }) => (
                  <button
                    type="button"
                    className="menu__link-btn menu__link-btn--share"
                    onClick={open}
                  >
                    <PiShareFatLight size={16} aria-hidden="true" />
                    Share Portfolio
                  </button>
                )}
              />

              <Link
                href="/contact"
                className="menu__link-btn menu__link-btn--contact"
                onClick={() => setIsOpen(false)}
              >
                <HiOutlineChatBubbleLeftRight size={16} aria-hidden="true" />
                Contact Me
              </Link>
            </div>
          </section>
        </div>
      )}
    </div>
  );
}
