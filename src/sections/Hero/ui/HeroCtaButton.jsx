import * as motion from "motion/react-client";
import "./HeroCtaButton.scss";

const spring = { type: "spring", stiffness: 400, damping: 30 };
const springFast = { type: "spring", stiffness: 500, damping: 35 };

export default function HeroButton({
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

  const content = (
    <>
      <span className="hero-cta-btn__icon" aria-hidden="true">
        <Icon size={18} />
      </span>
      {label != null && (
        <motion.span
          className="hero-cta-btn__label"
          initial={false}
          animate={{
            width: isExpanded ? "auto" : 0,
            opacity: isExpanded ? 1 : 0,
            minWidth: isExpanded ? undefined : 0,
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

  const sharedProps = {
    className: `hero-cta-btn hero-cta-btn--${variant} ${className}`.trim(),
    "aria-label": ariaLabel ?? label,
    title: title ?? label,
    onMouseEnter,
    onMouseLeave,
    ...rest,
  };

  if (isLink) {
    return (
      <motion.a
        href={href}
        download={download}
        {...sharedProps}
        whileTap={{ scale: 0.97 }}
        transition={springFast}
      >
        {content}
      </motion.a>
    );
  }

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
