"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { HiOutlineHome, HiOutlineFolder, HiOutlineBriefcase, HiOutlineChatBubbleLeftRight } from "react-icons/hi2";
import "./Navigation.scss";

const NAVIGATION_ITEMS = [
  { id: "home", label: "Home", path: "/", icon: HiOutlineHome },
  { id: "projects", label: "Projects", path: "/projects", icon: HiOutlineFolder },
  { id: "experiences", label: "Experiences", path: "/experiences", icon: HiOutlineBriefcase },
  { id: "blogs", label: "Blogs", path: "/blogs", icon: HiOutlineChatBubbleLeftRight },
];

function normalizePath(path) {
  if (!path || path === "/") return "/";
  return path.toLowerCase().replace(/\/+$/, "") || "/";
}

function isActivePath(current, target) {
  if (target === "/") return current === "/";
  return current === target || current.startsWith(target + "/");
}

const deepChild = {
  rest: { y: 0, color: "inherit" },
  hover: { y: "-52%", color: "#242527" },
};

export default function Navigation() {
  const pathname = normalizePath(usePathname());

  return (
    <motion.nav
      className="nav"
      aria-label="Main navigation"
      transition={{ duration: 0.5, ease: "easeInOut" }}
    >
      <motion.ul
        className="nav__list"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.5, ease: "easeInOut" }}
      >
        {NAVIGATION_ITEMS.map((item) => {
          const itemPath = normalizePath(item.path);
          const isActive = isActivePath(pathname, itemPath);

          const Icon = item.icon;
          return (
            <motion.li
              key={item.id}
              className="nav__item"
              initial="rest"
              animate="rest"
              whileHover="hover"
            >
              <Link
                href={itemPath}
                className={`nav__link ${isActive ? "active" : ""}`}
                aria-current={isActive ? "page" : undefined}
              >
                {Icon && <span className="nav__icon" aria-hidden="true"><Icon size={22} /></span>}
                <span className="nav__link__inner">
                  <motion.span
                    className="nav__link__slide"
                    variants={deepChild}
                    transition={{
                      duration: 0.3,
                      ease: [0.25, 0.1, 0.25, 1],
                    }}
                  >
                    <span className="nav__link__text">{item.label}</span>
                    <span className="nav__link__text" aria-hidden="true">
                      {item.label}
                    </span>
                  </motion.span>
                </span>
              </Link>
            </motion.li>
          );
        })}
      </motion.ul>
    </motion.nav>
  );
}
