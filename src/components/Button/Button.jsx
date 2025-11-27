import PropTypes from "prop-types";
import Link from "next/link";
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
  iconPosition = "right",
  ariaLabel,
  style,
  ...props
}) {
  const hasText = Boolean(children);
  const hasIcon = Boolean(icon);

  const variantClass =
    hasText && hasIcon
      ? "btn--label-icon"
      : hasText
        ? "btn--label-only"
        : "btn--icon-only";

  const baseClasses = ["btn", variantClass, className]
    .filter(Boolean)
    .join(" ")
    .trim();

  const label_icon = (
    <>
      {hasText && hasIcon && (
        <>
          <p className={`button_lable`}>{children}</p>
          <span
            className={[
              "button_icon",
              iconPosition === "right"
                ? "button_icon--right"
                : "button_icon--left",
            ]
              .filter(Boolean)
              .join(" ")}
          >
            {icon}
          </span>
        </>
      )}
    </>
  );

  const labelButton = (
    <>{hasText && <p className={`button_label--only`}>{children}</p>}</>
  );

  const labelIcon = (
    <>
      {hasIcon && (
        <span
          className={[
            "button_icon--only",
            iconPosition === "right"
              ? "button_icon--right"
              : "button_icon--left",
          ]
            .filter(Boolean)
            .join(" ")}
        >
          {icon}
        </span>
      )}
    </>
  );

  const content =
    hasText && hasIcon ? label_icon : hasText ? labelButton : labelIcon;

  const commonProps = {
    className: baseClasses,
    onClick,
    "aria-label": !hasText && hasIcon ? ariaLabel || "Button" : undefined,
    ...props,
  };

  if (href) {
    const isInternalRoute = href.startsWith("/") && !href.startsWith("#");
    if (isInternalRoute && !download && !target) {
      return (
        <Link href={href} {...commonProps}>
          {content}
        </Link>
      );
    }
    return (
      <a
        href={href}
        download={download}
        target={target}
        rel={rel}
        {...commonProps}
      >
        {content}
      </a>
    );
  }

  return (
    <button type="button" {...commonProps}>
      {content}
    </button>
  );
}

Button.propTypes = {
  children: PropTypes.node,
  href: PropTypes.string,
  download: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
  target: PropTypes.string,
  rel: PropTypes.string,
  onClick: PropTypes.func,
  className: PropTypes.string,
  icon: PropTypes.node,
  iconPosition: PropTypes.oneOf(["left", "right"]),
  ariaLabel: PropTypes.string,
};

export default Button;
