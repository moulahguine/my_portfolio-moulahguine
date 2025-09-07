import React from "react";
import "./Footer.scss";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer__container">
        {/* Main Footer Row */}
        <div className="footer__main">
          {/* Center - Copyright */}
          <div className="footer__copyright">
            <p>© {currentYear} Mohamed_Oulahguine. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
