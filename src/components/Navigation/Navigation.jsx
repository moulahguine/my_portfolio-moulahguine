"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  HiOutlineHome,
  HiOutlineFolder,
  HiOutlineBriefcase,
  HiOutlineChatBubbleLeftRight,
} from "react-icons/hi2";
import "./Navigation.scss";

const NAVIGATION_ITEMS = [
  { id: "home", label: "Home", path: "/", icon: HiOutlineHome },
  {
    id: "projects",
    label: "Projects",
    path: "/projects",
    icon: HiOutlineFolder,
  },
  {
    id: "experiences",
    label: "Experiences",
    path: "/experiences",
    icon: HiOutlineBriefcase,
  },
  {
    id: "blogs",
    label: "Blogs",
    path: "/blogs",
    icon: HiOutlineChatBubbleLeftRight,
  },
];

function normalizePath(path) {
  if (!path || path === "/") return "/";
  return path.toLowerCase().replace(/\/+$/, "") || "/";
}

function isActivePath(current, target) {
  if (target === "/") return current === "/";
  return current === target || current.startsWith(target + "/");
}

export default function Navigation() {
  const pathname = normalizePath(usePathname());

  return (
    <nav className="nav" aria-label="Main navigation">
      <ul className="nav__list">
        {NAVIGATION_ITEMS.map((item) => {
          const itemPath = normalizePath(item.path);
          const isActive = isActivePath(pathname, itemPath);

          const Icon = item.icon;
          return (
            <li key={item.id} className="nav__item">
              <Link
                href={itemPath}
                className={`nav__link ${isActive ? "active" : ""}`}
                aria-current={isActive ? "page" : undefined}
              >
                {Icon && (
                  <span className="nav__icon" aria-hidden="true">
                    <Icon size={18} />
                  </span>
                )}
                <h4 className="nav__link__inner">
                  <span className="nav__link__slide">
                    <span className="nav__link__text">{item.label}</span>
                    <span className="nav__link__text" aria-hidden="true">
                      {item.label}
                    </span>
                  </span>
                </h4>
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
