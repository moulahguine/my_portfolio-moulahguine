import InlineMap from "./ui/InlineMap";
import HeroMedia from "./ui/HeroMedia";
// Icons
import VerifiedBadge from "@/components/Icons/VerifiedBadge";
import { PiMapPinLight } from "react-icons/pi";
import { PiFilePdfDuotone } from "react-icons/pi";

// Styles
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
                Frontend Developer | React • Next.js • TypeScript
              </p>
              <address className="hero__location">
                <PiMapPinLight aria-hidden="true" /> Istanbul / Türkiye
              </address>
            </div>
          </div>

          <div className="resume-btn-container">
            <a
              href="/resume.pdf"
              download
              className="resume-btn"
              aria-label="Download my resume (PDF)"
              title="Download My Resume (PDF)"
            >
              <span className="resume-btn__icon" aria-hidden="true">
                <PiFilePdfDuotone aria-hidden="true" />
              </span>
              <span className="resume-btn__label">Resume</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
