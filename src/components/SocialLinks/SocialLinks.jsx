import React from "react";
import socialLinksData from "./socialLinksData";
import "./SocialLinks.scss";

export default function SocialLinks({
  variant = "desktop",
  filter = null,
  className = "",
}) {
  // Filter social links if needed
  const links = filter
    ? socialLinksData.filter((link) =>
        filter.includes(link.label.toLowerCase())
      )
    : socialLinksData;

  return (
    <div className={`social-links social-links--${variant} ${className}`}>
      <ul className="social-links__list">
        {links.map((social, index) => {
          const IconComponent = social.icon;
          return (
            <li key={index} className="social-links__item">
              <a
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="social-links__link"
                aria-label={social.label}
                style={{ "--color": social.color }}
              >
                <IconComponent />
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
