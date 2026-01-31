"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import * as motion from "motion/react-client";
import "./Navigation.scss";

const NAVIGATION_ITEMS = [
  { id: "home", label: "Home", path: "/" },
  { id: "projects", label: "Projects", path: "/projects" },
  { id: "experiences", label: "Experiences", path: "/experiences" },
  { id: "blogs", label: "Blogs", path: "/blogs" },
];

function normalizePath(path) {
  if (!path || path === "/") return "/";
  return path.toLowerCase().replace(/\/+$/, "") || "/";
}

export default function Navigation() {
  const rawPathname = usePathname();
  const pathname = normalizePath(rawPathname ?? "");

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
          const isActive = pathname === itemPath;

          return (
            <li key={item.id} className="nav__item">
              <Link
                href={item.path}
                className={`nav__link${isActive ? " nav__link--active" : ""}`}
                aria-current={isActive ? "page" : undefined}
              >
                <span className="nav__link__inner">
                  <motion.span
                    className="nav__link__slide"
                    initial={{ y: 0 }}
                    whileHover={{
                      y: "-52%",
                      color: "#242527",
                    }}
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
            </li>
          );
        })}
      </motion.ul>
    </motion.nav>
  );
}
