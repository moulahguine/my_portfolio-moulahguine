import "./Hero.scss";
import heroImage from "../../assets/images/hero-img.webp";
import { MdOutlineLocationOn } from "react-icons/md";
import { useEffect, useState } from "react";

export default function Hero() {
  const [heroHeight, setHeroHeight] = useState(window.innerHeight);

  useEffect(() => {
    const initialHeight = window.innerHeight;
    setHeroHeight(initialHeight);
  }, []);

  return (
    <section
      style={{ height: `${heroHeight}px` }}
      id="home"
      className="hero"
      aria-label="Hero"
    >
      <div className="hero__inner">
        <div className="hero__content">
          <h1 className="hero__title">Hi, I'm mohamed oulahguine</h1>
          <h1 className="hero__subtitle">frontend developer</h1>
          <p className="hero__description">
            Energetic frontend developer focused on performance, quality, and
            pixel-perfect details. I write clean, well-designed code to build
            smooth, create responsive websites with mobile first approach.
          </p>
          <div className="hero__location">
            <p>
              <MdOutlineLocationOn />
              Living in Istanbul, Türkiye — originally from Morocco
            </p>
          </div>
          <div className="hero__resume">
            <a className="btn" href="#">
              resume
            </a>
          </div>
        </div>
        <div className="hero__media" aria-hidden="true">
          <img
            className="hero__image"
            src={heroImage}
            alt="Abstract developer illustration"
            loading="eager"
          />
        </div>
      </div>
    </section>
  );
}
