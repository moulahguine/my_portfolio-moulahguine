import "./Hero.scss";
import heroImage from "../../assets/images/hero-img.png";

export default function Hero() {
  return (
    <section id="home" className="hero" aria-label="Hero">
      <div className="hero__inner">
        <div className="hero__content">
          <h1 className="hero__title">Hi, I'm Moulahguine</h1>
          <p className="hero__subtitle">
            I build clean, fast, and accessible web experiences.
          </p>
          <div className="hero__actions">
            <a className="btn btn--primary" href="#projects">
              View Projects
            </a>
            <a className="btn btn--ghost" href="#contact">
              Contact Me
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
