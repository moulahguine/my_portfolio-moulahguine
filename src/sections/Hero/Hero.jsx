import "./Hero.scss";
import heroImage from "../../assets/images/hero-img.webp";
import { MdOutlineLocationOn } from "react-icons/md";
import { HiDownload } from "react-icons/hi";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiCodepen } from "react-icons/si";
import { useEffect, useState } from "react";
import ReactCountryFlag from "react-country-flag";

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
          <h1 className="hero__title">
            Hi👋, I'm <span>mohamed oulahguine</span>
          </h1>
          <h1 className="hero__subtitle">frontend developer</h1>
          <p className="hero__description">
            Energetic frontend developer focused on <strong>performance</strong>
            , <strong>quality</strong>, & <strong>pixel-perfect details</strong>
            . I write clean, well-designed code to build smooth, create
            responsive websites with mobile first approach.
          </p>
          <div className="hero__location">
            <MdOutlineLocationOn className="location__icon" />
            <p>
              Living in Istanbul, Türkiye <ReactCountryFlag countryCode="tr" />{" "}
              (originally from Morocco <ReactCountryFlag countryCode="ma" />)
            </p>
          </div>
          <div className="hero__resume">
            <a className="btn" href="#">
              <HiDownload className="dow__resume" />
              resume
            </a>

            <div className="hero__social">
              <a href="#" className="social__link" aria-label="GitHub">
                <FaGithub />
              </a>
              <a href="#" className="social__link" aria-label="CodePen">
                <SiCodepen />
              </a>
              <a href="#" className="social__link" aria-label="LinkedIn">
                <FaLinkedin />
              </a>
            </div>
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
