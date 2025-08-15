import "./Hero.scss";
import heroImage from "../../assets/images/hero-section/hero-img.webp";
import { HiDownload } from "react-icons/hi";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiCodepen } from "react-icons/si";
import { useHeroHeight } from "../../hooks";
import Location from "../../components/Location/Location";

export default function Hero() {
  const heroHeight = useHeroHeight();

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
          <Location />
          <div className="hero__resume">
            <a className="btn" href="/resume.pdf" download>
              <HiDownload className="dow__resume" />
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
        <div className="hero__social">
          <a
            href="https://github.com/moulahguine"
            target="_blank"
            rel="noopener noreferrer"
            className="social__link"
            aria-label="GitHub"
          >
            <FaGithub />
          </a>
          <a
            href="https://codepen.io/moulahguine"
            target="_blank"
            rel="noopener noreferrer"
            className="social__link"
            aria-label="CodePen"
          >
            <SiCodepen />
          </a>
          <a
            href="https://www.linkedin.com/in/moulahguine"
            target="_blank"
            rel="noopener noreferrer"
            className="social__link"
            aria-label="LinkedIn"
          >
            <FaLinkedin />
          </a>
        </div>
      </div>
    </section>
  );
}
