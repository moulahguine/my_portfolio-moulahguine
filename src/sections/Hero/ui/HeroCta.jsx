"use client";
// Hooks
import { useState } from "react";
// Components
import ConnectLinks from "./ConnectLinks";
import SharePortfolio from "./SharePortfolio";
// Icons
import { FaRegFileAlt } from "react-icons/fa";
import { RxPerson } from "react-icons/rx";
import { PiShareFatLight } from "react-icons/pi";
// Animations
import * as motion from "motion/react-client";

// Constants
const spring = { type: "spring", stiffness: 400, damping: 30 };
const springFast = { type: "spring", stiffness: 500, damping: 35 };

const EXPANDED_RESUME = "resume";
const EXPANDED_CONNECT = "connect";
const EXPANDED_SHARE = "share";

// Hero Button
function HeroButton({
  as: Component = "button",
  icon: Icon,
  label,
  isExpanded,
  variant = "light",
  className = "",
  onClick,
  href,
  download,
  ariaLabel,
  title,
  onMouseEnter,
  onMouseLeave,
  ...rest
}) {
  const isLink = Component === "a";

  // Content
  const content = (
    <>
      {/* Icon */}
      <span className="hero-cta-btn__icon" aria-hidden="true">
        <Icon size={18} />
      </span>
      {/* Label */}
      {label != null && (
        <motion.span
          className="hero-cta-btn__label"
          initial={false}
          animate={{
            width: isExpanded ? "auto" : 0,
            opacity: isExpanded ? 1 : 0,
            overflow: "hidden",
          }}
          transition={spring}
          style={{ whiteSpace: "nowrap", display: "inline-block" }}
        >
          {label}
        </motion.span>
      )}
    </>
  );

  // Shared props
  const sharedProps = {
    className: `hero-cta-btn hero-cta-btn--${variant} ${className}`.trim(),
    "aria-label": ariaLabel ?? label,
    title: title ?? label,
    onMouseEnter,
    onMouseLeave,
    ...rest,
  };

  // Link
  if (isLink) {
    return (
      <motion.a
        href={href}
        download={download}
        {...sharedProps}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.97 }}
        transition={springFast}
      >
        {content}
      </motion.a>
    );
  }

  // Button
  return (
    <motion.button
      type="button"
      onClick={onClick}
      {...sharedProps}
      whileTap={{ scale: 0.97 }}
      transition={springFast}
    >
      {content}
    </motion.button>
  );
}

// Hero CTA
export default function HeroCta() {
  const [expandedId, setExpandedId] = useState(EXPANDED_RESUME);

  return (
    // Hero CTA Group
    <div
      className="hero__cta"
      onMouseLeave={() => setExpandedId(EXPANDED_RESUME)}
      role="group"
      aria-label="Hero actions"
    >
      {/* Resume Button */}
      <HeroButton
        as="a"
        href="/resume.pdf"
        download
        icon={FaRegFileAlt}
        label="Resume"
        variant="resume"
        isExpanded={expandedId === EXPANDED_RESUME}
        onMouseEnter={() => setExpandedId(EXPANDED_RESUME)}
        ariaLabel="Download my resume (PDF)"
        title="Download my  resume"
      />

      {/* Connect Links Button */}
      <ConnectLinks
        renderTrigger={({ open }) => (
          <HeroButton
            as="button"
            icon={RxPerson}
            label="Social links"
            variant="light"
            isExpanded={expandedId === EXPANDED_CONNECT}
            onMouseEnter={() => setExpandedId(EXPANDED_CONNECT)}
            onClick={open}
            ariaLabel="Open social links"
            title="Social links"
          />
        )}
      />
      {/* Share Portfolio Button */}
      <SharePortfolio
        renderTrigger={({ open }) => (
          <HeroButton
            as="button"
            icon={PiShareFatLight}
            label="Share"
            variant="light"
            isExpanded={expandedId === EXPANDED_SHARE}
            onMouseEnter={() => setExpandedId(EXPANDED_SHARE)}
            onClick={open}
            ariaLabel="Share my portfolio"
            title="Share my portfolio"
          />
        )}
      />
    </div>
  );
}
