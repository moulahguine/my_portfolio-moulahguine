import InlineMap from "./ui/InlineMap";
import HeroMedia from "./ui/HeroMedia";
import VerifiedBadge from "@/components/Icons/VerifiedBadge";
import { PiMapPinLight } from "react-icons/pi";
import { FaRegFileAlt } from "react-icons/fa";
import "./Hero.scss";

export default function Hero() {
  return (
    <section className="hero" aria-labelledby="hero-heading">
      <div className="container">
        <div className="hero__map" aria-label="Map showing Istanbul and Rabat">
          <InlineMap />
        </div>

        <div className="hero__profile">
          <div className="hero__profile-content">
            <HeroMedia classImage="hero__image" classFigure="hero__media" />

            <div className="hero__info">
              <h1 id="hero-title" className="hero__title">
                Mohamed Oulahguine
                <VerifiedBadge
                  className="verified-badge"
                  width={25}
                  height={25}
                />
              </h1>
              <p className="hero__role">
                Frontend Engineer | Open to Opportunities
              </p>
              <address className="hero__location">
                <PiMapPinLight aria-hidden="true" /> Istanbul / Türkiye
              </address>
            </div>
          </div>

          <div className="hero__cta">
            <a
              href="/resume.pdf"
              download
              className="hero-cta-btn hero-cta-btn--resume"
              aria-label="Download my resume (PDF)"
              title="Download my resume"
            >
              <span className="hero-cta-btn__icon" aria-hidden="true">
                <FaRegFileAlt size={20} />
              </span>
              <span className="hero-cta-btn__label">Resume</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
