import InlineMap from "./ui/InlineMap";
import HeroMedia from "./ui/HeroMedia";
import HeroCta from "./ui/HeroCta";
import VerifiedBadge from "@/components/Icons/VerifiedBadge";
import { PiMapPinLight } from "react-icons/pi";
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
              <p className="hero__subtitle">
                Frontend Developer | Nextjs & TypeScript
              </p>
              <div className="hero__location">
                <PiMapPinLight /> Istanbul / Türkiye
              </div>
            </div>
          </div>

          <HeroCta />
        </div>
      </div>
    </section>
  );
}
