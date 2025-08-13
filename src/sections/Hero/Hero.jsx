import "./Hero.scss";
import heroImage from "../../assets/images/hero-img.webp";

export default function Hero() {
  return (
    <section id="home" className="hero" aria-label="Hero">
      <div className="hero__inner">
        <div className="hero__content">
          <h1 className="hero__title">Hi, I'm mohamed oulahguine</h1>
          <p className="hero__subtitle">
            Energetic frontend developer focused on performance, quality, and
            pixel-perfect details. I write clean, well-designed code to build
            smooth, create responsive websites with mobile first approach.
          </p>
          <div className="hero__location">
            <p>Living in Istanbul, Türkiye — originally from Morocco</p>
          </div>
          <div className="hero__actions">
            <a className="btn btn--primary" href="#projects">
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
