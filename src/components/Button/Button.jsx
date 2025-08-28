import PropTypes from "prop-types";
import "./Button.scss";

function Button({
  children,
  href,
  download,
  target,
  rel,
  onClick,
  className = "",
  icon,
  iconPosition = "left",
  ...props
}) {
  // Build button classes
  const buttonClasses = `btn ${className}`.trim();

  // Build button content (with optional icon)
  const content = (
    <>
      {icon && iconPosition === "left" && (
        <span className="btn__icon btn__icon--left">{icon}</span>
      )}
      <span className="btn__text">{children}</span>
      {icon && iconPosition === "right" && (
        <span className="btn__icon btn__icon--right">{icon}</span>
      )}
    </>
  );

  // If href is provided, render as anchor tag
  if (href) {
    return (
      <a
        href={href}
        download={download}
        target={target}
        rel={rel}
        className={`${buttonClasses} btn__href`}
        onClick={onClick}
        {...props}
      >
        {content}
      </a>
    );
  }

  // Otherwise render as button
  return (
    <button
      type="button"
      className={`${buttonClasses} btn`}
      onClick={onClick}
      {...props}
    >
      {content}
    </button>
  );
}

Button.propTypes = {
  children: PropTypes.node.isRequired,
  href: PropTypes.string,
  download: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
  target: PropTypes.string,
  rel: PropTypes.string,
  onClick: PropTypes.func,
  className: PropTypes.string,
  icon: PropTypes.node,
  iconPosition: PropTypes.oneOf(["left", "right"]),
};

export default Button;
