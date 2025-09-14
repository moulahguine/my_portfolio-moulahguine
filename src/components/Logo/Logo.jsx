import React from "react";
import "./Logo.scss";

const Logo = ({
  onClick,
  className = "",
  ariaLabel = "Go to home section",
  text = "m oulahguine",
  highlightChar = "m",
  style,
}) => {
  return (
    <button
      onClick={onClick}
      className={`logo ${className}`}
      aria-label={ariaLabel}
      style={{ ...style }}
    >
      <span className="logo__highlight">{highlightChar}</span>
      {text.replace(highlightChar, "").trim()}
    </button>
  );
};

export default Logo;
