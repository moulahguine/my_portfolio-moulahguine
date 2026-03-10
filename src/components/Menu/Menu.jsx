"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import Link from "next/link";
import {
  HiOutlineMoon,
  HiOutlineSun,
  HiOutlineChatBubbleLeftRight,
} from "react-icons/hi2";
import { CiMenuFries } from "react-icons/ci";

import { RxPerson } from "react-icons/rx";
import { PiShareFatLight } from "react-icons/pi";
import ConnectLinks from "@/components/ConnectLinks/ConnectLinks";
import SharePortfolio from "@/components/SharePortfolio/SharePortfolio";
import "./Menu.scss";

const STORAGE_THEME_KEY = "portfolio-theme";
const DEFAULT_THEME = "dark";

export default function Menu() {
  const [isOpen, setIsOpen] = useState(false);
  const [theme, setTheme] = useState(DEFAULT_THEME);
  const panelRef = useRef(null);
  const triggerRef = useRef(null);

  useEffect(() => {
    const savedTheme = localStorage.getItem(STORAGE_THEME_KEY) || DEFAULT_THEME;
    setTheme(savedTheme);
    document.documentElement.setAttribute("data-theme", savedTheme);
  }, []);

  useEffect(() => {
    if (!isOpen) return;
    function handleClickOutside(e) {
      if (
        panelRef.current &&
        !panelRef.current.contains(e.target) &&
        triggerRef.current &&
        !triggerRef.current.contains(e.target)
      ) {
        setIsOpen(false);
      }
    }
    function handleEscape(e) {
      if (e.key === "Escape") setIsOpen(false);
    }
    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleEscape);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEscape);
    };
  }, [isOpen]);

  const switchTheme = useCallback(
    (newTheme) => {
      if (newTheme === theme) return;
      setTheme(newTheme);
      localStorage.setItem(STORAGE_THEME_KEY, newTheme);
      document.documentElement.setAttribute("data-theme", newTheme);
    },
    [theme]
  );

  // return menu component
  return (
    <div className="header__menu">
      <button
        ref={triggerRef}
        type="button"
        className={`menu__trigger ${isOpen ? "active" : ""}`}
        onClick={() => setIsOpen((prev) => !prev)}
        aria-label="Open menu"
        aria-expanded={isOpen}
      >
        <span className="trigger__line first"></span>
        <span className="trigger__line second"></span>
        <span className="trigger__line third"></span>
      </button>

      {isOpen && (
        <div ref={panelRef} className="menu__container" role="dialog">
          {/* --- Theme --- */}
          <section className="theme__section">
            {/* theme title */}
            <h2 className="theme__title">Theme</h2>
            {/* theme options */}
            <div className="theme__options">
              {/* theme option dark */}
              <button
                type="button"
                className={`option dark ${theme === "dark" ? "option--active" : ""}`}
                onClick={() => switchTheme("dark")}
              >
                <HiOutlineMoon size={16} aria-hidden="true" />
                <span className="name">Dark</span>
              </button>
              {/* theme option light */}
              <button
                type="button"
                className={`option light ${theme === "light" ? "option--active" : ""}`}
                onClick={() => switchTheme("light")}
              >
                <HiOutlineSun size={16} aria-hidden="true" />
                <span className="name">Light</span>
              </button>
            </div>
          </section>

          {/* --- Links --- */}
          <section className="links__section">
            {/* contact and share title */}
            <h2 className="links__title"> contact and share</h2>
            {/* contact and share links */}
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
