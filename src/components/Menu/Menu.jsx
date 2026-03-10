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
    <div className="header__menu">
      <button
        ref={triggerRef}
        type="button"
        className={`menu__trigger ${isOpen ? "active" : ""}`}
        onClick={() => setIsOpen((prev) => !prev)}
        aria-label={isOpen ? "Close menu" : "Open menu"}
        aria-expanded={isOpen}
        aria-haspopup="dialog"
      >
        <span className="trigger__line first"></span>
        <span className="trigger__line second"></span>
        <span className="trigger__line third"></span>
      </button>

      {isOpen && (
        <div
          ref={panelRef}
          className="menu__container"
          role="dialog"
          aria-modal="false"
        >
          <section className="theme__section menu__section">
            <h2 className="theme__title menu__title">Theme</h2>

            <div className="theme__options">
              <button
                type="button"
                className={`option dark ${
                  currentTheme === "dark" ? "active" : ""
                }`}
                onClick={() => {
                  switchTheme("dark");
                  setIsOpen(false);
                }}
              >
                <HiOutlineMoon size={16} aria-hidden="true" />
                <span className="name">Dark</span>
              </button>

              <button
                type="button"
                className={`option light ${
                  currentTheme === "light" ? "active" : ""
                }`}
                onClick={() => {
                  switchTheme("light");
                  setIsOpen(false);
                }}
              >
                <HiOutlineSun size={16} aria-hidden="true" />
                <span className="name">Light</span>
              </button>
            </div>
          </section>

          <section className="links__section menu__section">
            <h2 className="links__title menu__title">Contact & Share</h2>

            <div className="links__options">
              <ConnectLinks
                renderTrigger={({ open }) => (
                  <button
                    type="button"
                    className="social__link-btn"
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
                    className="share__link-btn"
                    onClick={open}
                  >
                    <PiShareFatLight size={16} aria-hidden="true" />
                    Share Portfolio
                  </button>
                )}
              />

              <Link
                href="/contact"
                className="contact__link-btn"
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
