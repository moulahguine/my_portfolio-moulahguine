// Components
import IntroVideo from "./IntroVideo";

// Styles
import "./About.scss";

// Component
export default function About() {
  return (
    <section id="about" className="about">
      {/* Container section */}
      <div className="container">
        {/* Header section */}
        <header className="about__header">
          <h3 className="about__header-title">how I work</h3>
        </header>

        {/* Content section */}
        <div className="about__content">
          {/* About me section */}
          <article className="about__me">
            <p className="about__text">
              I focus on building interfaces that feel fast, predictable, and
              easy to use. Beyond visual design, I pay close attention to the
              details that often create problems later in development, such as
              component structure, rendering behavior, and accessibility.
            </p>

            <p className="about__text">
              My goal is to build interfaces that remain clear and maintainable
              as products grow. I care about creating systems that make it
              easier for teams to extend, improve, and work with the UI over
              time.
            </p>

            <p className="about__text">
              I enjoy collaborating closely with designers and backend engineers
              to turn product ideas into clear, reusable interfaces and
              maintainable UI systems.
            </p>

            <p className="about__video-note">
              For a quick look at how I approach frontend development, you can
              watch the short video below.
            </p>
          </article>

          {/* Video section */}
          <div className="about__video">
            <IntroVideo />
          </div>
        </div>
      </div>
    </section>
  );
}
