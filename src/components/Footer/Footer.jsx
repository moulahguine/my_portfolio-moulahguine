import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaArrowUp } from "react-icons/fa";
import "./Footer.scss";
import Logo from "../Logo/Logo";

const Footer = () => {
  const [lastUpdated, setLastUpdated] = useState("");

  useEffect(() => {
    const fetchLastUpdated = async () => {
      try {
        const response = await fetch(
          "https://api.github.com/repos/moulahguine/my_portfolio-moulahguine/commits?per_page=1"
        );
        if (response.ok) {
          const data = await response.json();
          if (data.length > 0) {
            const lastCommitDate = new Date(data[0].commit.committer.date);
            const formattedDate = lastCommitDate.toLocaleDateString("en-GB", {
              day: "2-digit",
              month: "2-digit",
              year: "numeric",
            });
            setLastUpdated(formattedDate);
          }
        }
      } catch (error) {
        console.error("Failed to fetch last updated date:", error);

        setLastUpdated(
          new Date().toLocaleDateString("en-GB", {
            day: "2-digit",
            month: "2-digit",
            year: "numeric",
          })
        );
      }
    };

    fetchLastUpdated();
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="footer">
      <div className="footer__container">
        {/* Main Footer Row */}
        <div className="footer__main">
          {/* Left - Logo */}
          <div className="footer__logo">
            <Logo
              className="footer__logo-component"
              ariaLabel="Go to home section"
              text="oulahguine"
              highlightChar="m"
              onClick={() => scrollToTop()}
            />
          </div>

          {/* Center - Build Info */}
          <div className="footer__build-info">
            <p>
              Built by{" "}
              <a
                href="https://github.com/moulahguine"
                target="_blank"
                rel="noopener noreferrer"
                className="footer__link"
              >
                Mohamed Oulahguine
              </a>
              {lastUpdated && <> | Last updated: {lastUpdated}</>}
            </p>
          </div>

          {/* Right - Back to Top */}
          <motion.button
            className="footer__back-to-top"
            onClick={scrollToTop}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            aria-label="Back to top"
          >
            <FaArrowUp />
            <span>Back to top</span>
          </motion.button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
