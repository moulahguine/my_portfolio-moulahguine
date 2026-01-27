import InlineMap from "./ui/InlineMap";
import HeroMedia from "./ui/HeroMedia";
import ConnectLinks from "./ui/ConnectLinks";
import VerifiedBadge from "@/components/Icons/VerifiedBadge";
import { GoDownload } from "react-icons/go";
import * as motion from "motion/react-client";
import "./Hero.scss";

export default function Hero() {
  return (
    <section className="hero" aria-labelledby="hero-heading">
      {/* hero container start */}

      <div className="container">
        {/* section for location start */}

        <div className="hero__map" aria-label="Map showing Istanbul and Rabat">
          <InlineMap />
        </div>

        {/* section for location end */}

        {/* section for inforamtions start */}

        <div className="hero__profile">
          {/* hero main picture start */}

          <HeroMedia classImage="hero__image" classFigure="hero__media" />

          {/* hero main picture end */}

          {/* hero Name and Role start */}

          <div className="hero__info">
            <h1 id="hero-title" className="hero__title">
              Mohamed Oulahguine
              <VerifiedBadge
                className="verified-badge"
                width={25}
                height={25}
              />
            </h1>
            <p className="hero__subtitle">
              Frontend Developer | Nextjs & TypeScript | Tailwind CSS{" "}
            </p>
            <div className="hero__rotating-text">
              <span className="item state">Available for Hire</span>
              <span className="item location">Istanbul / Türkiye</span>
              <span className="item username">@moulahguine</span>
            </div>
          </div>

          {/* hero Name and Role end */}

          {/* hero resume button start */}

          <div className="hero__cta">
            <a
              className="resume-btn"
              aria-label="Download resume as PDF"
              href="/resume.pdf"
              download
            >
              <span className="resume__title">Resume</span>
              <span className="resume__icon" aria-hidden="true">
                <GoDownload />
              </span>
            </a>

            <ConnectLinks />
          </div>

          {/* hero resume button end */}
        </div>

        {/* section for inforamtions end */}
      </div>

      {/* hero container end */}
    </section>
  );
}
