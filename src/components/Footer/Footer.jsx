import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import "./Footer.scss";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      icon: FaGithub,
      href: "https://github.com/moulahguine",
      label: "GitHub",
      ariaLabel: "Visit my GitHub profile",
    },
    {
      icon: FaLinkedin,
      href: "https://linkedin.com/in/moulahguine",
      label: "LinkedIn",
      ariaLabel: "Connect with me on LinkedIn",
    },
    {
      icon: FaEnvelope,
      href: "mailto:mohamedoulahguine@gmail.com",
      label: "Email",
      ariaLabel: "Send me an email",
    },
  ];

  const quickLinks = [
    { href: "#about", label: "About" },
    { href: "#projects", label: "Projects" },
    { href: "#contact", label: "Contact" },
  ];

  const legalLinks = [
    { href: "/privacy", label: "Privacy Policy" },
    { href: "/terms", label: "Terms of Use" },
  ];

  return (
    <footer className="footer">
      <div className="footer__container">
        {/* Main Footer Row */}
        <div className="footer__main">
          {/* Left - Logo/Name */}
          <div className="footer__brand">
            <h3 className="footer__logo">SiMo</h3>
          </div>

          {/* Center - Copyright */}
          <div className="footer__copyright">
            <p>© {currentYear} SiMo. All rights reserved.</p>
          </div>

          {/* Right - Social Links */}
          <div className="footer__social">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="footer__social-link"
                aria-label={social.ariaLabel}
              >
                <social.icon className="footer__social-icon" />
              </a>
            ))}
          </div>
        </div>

        {/* Secondary Footer Row */}
        <div className="footer__secondary">
          {/* Quick Links */}
          <div className="footer__links">
            <h4 className="footer__links-title">Quick Links</h4>
            <ul className="footer__links-list">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="footer__link">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Links */}
          <div className="footer__links">
            <h4 className="footer__links-title">Legal</h4>
            <ul className="footer__links-list">
              {legalLinks.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="footer__link">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

