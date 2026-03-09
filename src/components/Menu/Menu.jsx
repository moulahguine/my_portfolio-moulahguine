"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import Link from "next/link";
import {
  HiOutlineEllipsisVertical,
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
const STORAGE_LANG_KEY = "portfolio-lang";
const DEFAULT_THEME = "dark";
const DEFAULT_LANG = "en";

const LANGUAGES = [
  { code: "en", label: "EN" },
  { code: "tr", label: "TR" },
  { code: "ar", label: "AR" },
];

export default function Menu() {
  const [isOpen, setIsOpen] = useState(false);
  const [theme, setTheme] = useState(DEFAULT_THEME);
  const [lang, setLang] = useState(DEFAULT_LANG);
  const panelRef = useRef(null);
  const triggerRef = useRef(null);

  useEffect(() => {
    const savedTheme = localStorage.getItem(STORAGE_THEME_KEY) || DEFAULT_THEME;
    const savedLang = localStorage.getItem(STORAGE_LANG_KEY) || DEFAULT_LANG;
    setTheme(savedTheme);
    setLang(savedLang);
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

  const togglePanel = useCallback(() => setIsOpen((prev) => !prev), []);

  const switchTheme = useCallback(
    (newTheme) => {
      if (newTheme === theme) return;
      setTheme(newTheme);
      localStorage.setItem(STORAGE_THEME_KEY, newTheme);
      document.documentElement.setAttribute("data-theme", newTheme);
    },
    [theme]
  );

  const switchLang = useCallback(
    (newLang) => {
      if (newLang === lang) return;
      setLang(newLang);
      localStorage.setItem(STORAGE_LANG_KEY, newLang);
    },
    [lang]
  );

  return (
    <div className="quick-menu">
      <button
        ref={triggerRef}
        type="button"
        className="quick-menu__trigger"
        onClick={togglePanel}
        aria-label="Open menu"
        aria-expanded={isOpen}
      >
        <CiMenuFries size={20} aria-hidden="true" />
      </button>

      {isOpen && (
        <div ref={panelRef} className="quick-menu__panel" role="dialog">
          {/* --- Theme --- */}
          <div className="quick-menu__section">
            <span className="quick-menu__label">Theme</span>
            <div className="quick-menu__options">
              <button
                type="button"
                className={`quick-menu__option ${theme === "dark" ? "quick-menu__option--active" : ""}`}
                onClick={() => switchTheme("dark")}
              >
                <HiOutlineMoon size={16} />
                Dark
              </button>
              <button
                type="button"
                className={`quick-menu__option ${theme === "light" ? "quick-menu__option--active" : ""}`}
                onClick={() => switchTheme("light")}
              >
                <HiOutlineSun size={16} />
                Light
              </button>
            </div>
          </div>

          {/* --- Language --- */}
          <div className="quick-menu__section">
            <span className="quick-menu__label">Language</span>
            <div className="quick-menu__options">
              {LANGUAGES.map((l) => (
                <button
                  key={l.code}
                  type="button"
                  className={`quick-menu__option ${lang === l.code ? "quick-menu__option--active" : ""}`}
                  onClick={() => switchLang(l.code)}
                >
                  {l.label}
                </button>
              ))}
            </div>
          </div>

          {/* --- Links --- */}
          <div className="quick-menu__section quick-menu__section--border-top">
            <span className="quick-menu__label">Quick Links</span>
            <div className="quick-menu__links">
              <ConnectLinks
                renderTrigger={({ open }) => (
                  <button
                    type="button"
                    className="quick-menu__link-btn"
                    onClick={open}
                  >
                    <RxPerson size={16} />
                    Social Links
                  </button>
                )}
              />
              <SharePortfolio
                renderTrigger={({ open }) => (
                  <button
                    type="button"
                    className="quick-menu__link-btn"
                    onClick={open}
                  >
                    <PiShareFatLight size={16} />
                    Share Portfolio
                  </button>
                )}
              />
              <Link
                href="/#contact"
                className="quick-menu__link-btn"
                onClick={() => setIsOpen(false)}
              >
                <HiOutlineChatBubbleLeftRight size={16} />
                Contact Me
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
