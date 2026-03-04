"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import Link from "next/link";
import {
  HiOutlineAdjustmentsHorizontal,
  HiOutlineMoon,
  HiOutlineSun,
  HiOutlineChatBubbleLeftRight,
} from "react-icons/hi2";
import "./SettingsMenu.scss";

const STORAGE_THEME_KEY = "portfolio-theme";
const STORAGE_LANG_KEY = "portfolio-lang";
const DEFAULT_THEME = "dark";
const DEFAULT_LANG = "en";

const LANGUAGES = [
  { code: "en", label: "EN" },
  { code: "tr", label: "TR" },
  { code: "ar", label: "AR" },
];

export default function SettingsMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const [theme, setTheme] = useState(DEFAULT_THEME);
  const [lang, setLang] = useState(DEFAULT_LANG);
  const panelRef = useRef(null);
  const triggerRef = useRef(null);

  useEffect(() => {
    const savedTheme =
      localStorage.getItem(STORAGE_THEME_KEY) || DEFAULT_THEME;
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
    <div className="settings-menu">
      <button
        ref={triggerRef}
        type="button"
        className="settings-menu__trigger"
        onClick={togglePanel}
        aria-label="Open settings"
        aria-expanded={isOpen}
      >
        <HiOutlineAdjustmentsHorizontal size={20} />
      </button>

      {isOpen && (
        <div ref={panelRef} className="settings-menu__panel" role="dialog">
          {/* --- Theme --- */}
          <div className="settings-menu__section">
            <span className="settings-menu__label">Theme</span>
            <div className="settings-menu__options">
              <button
                type="button"
                className={`settings-menu__option ${theme === "dark" ? "settings-menu__option--active" : ""}`}
                onClick={() => switchTheme("dark")}
              >
                <HiOutlineMoon size={16} />
                Dark
              </button>
              <button
                type="button"
                className={`settings-menu__option ${theme === "light" ? "settings-menu__option--active" : ""}`}
                onClick={() => switchTheme("light")}
              >
                <HiOutlineSun size={16} />
                Light
              </button>
            </div>
          </div>

          {/* --- Language --- */}
          <div className="settings-menu__section">
            <span className="settings-menu__label">Language</span>
            <div className="settings-menu__options">
              {LANGUAGES.map((l) => (
                <button
                  key={l.code}
                  type="button"
                  className={`settings-menu__option ${lang === l.code ? "settings-menu__option--active" : ""}`}
                  onClick={() => switchLang(l.code)}
                >
                  {l.label}
                </button>
              ))}
            </div>
          </div>

          {/* --- Contact --- */}
          <div className="settings-menu__section settings-menu__section--border-top">
            <Link
              href="/#contact"
              className="settings-menu__contact"
              onClick={() => setIsOpen(false)}
            >
              <HiOutlineChatBubbleLeftRight size={16} />
              Contact Me
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}
