import AsideInlineMap from "./InlineMap";
import HeroMedia from "./HeroMedia";
import VerifiedBadge from "@/components/icons/VerifiedBadge";
import socialLinks from "@/components/SocialLinks/socialLinksData";
import { GoDownload } from "react-icons/go";
import * as motion from "motion/react-client";
import "./Hero.scss";

export default function Hero() {
  const heroSocialLinks = socialLinks.filter((link) =>
    ["LinkedIn", "GitHub"].includes(link.label)
  );

  return (
    <section className="hero" aria-labelledby="hero-heading">
      {/* hero container start */}

      <div className="container">
        {/* section for location start */}

        <div className="hero__map" aria-label="Map showing Istanbul and Rabat">
          <AsideInlineMap />
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
              Frontend Developer | Nextjs & TypeScript | Tailwind CSS | Open to
              Opportunities
            </p>
          </div>

          {/* hero Name and Role end */}

          {/* hero resume button start */}

          <div className="hero__cta">
            <div className="hero__social">
              {heroSocialLinks.map((link) => {
                const Icon = link.icon;
                return (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hero__social-link"
                    aria-label={`Visit my ${link.label} profile`}
                    style={{ "--link-color": link.color }}
                  >
                    <Icon />
                  </a>
                );
              })}
            </div>
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
          </div>

          {/* hero resume button end */}
        </div>

        {/* section for inforamtions end */}
      </div>

      {/* hero container end */}
    </section>
  );
}
