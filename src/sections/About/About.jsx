import IntroVideo from "./IntroVideo";
import "./About.scss";

/**
 * About section — Two-column layout.
 *
 * Left column:  Text describing how I work.
 * Right column: Video preview card (IntroVideo).
 *               Clicking it opens a video modal.
 */
export default function About() {
  return (
    <section id="about" className="about">
      <div className="container">
        {/* Section label */}
        <h1 className="about__header header__section">How I Work</h1>

        {/* Two-column grid: text + video */}
        <div className="about__grid">
          {/* Left column — text content */}
          <article className="about__text">
            <p className="about__info">
              I focus on building interfaces that feel fast, predictable, and
              easy to use. I care about the details that usually cause problems
              later, like component structure, rendering behavior, and
              accessibility. I work comfortably with designers and backend teams
              to turn ideas into clear, reusable UI. Most of my recent work uses
              Next.js (App Router), TypeScript, Tailwind, and Framer Motion,
              with an emphasis on performance and purposeful motion.
            </p>
          </article>

          {/* Right column — video preview */}
          <div className="about__video">
            <IntroVideo />
          </div>
        </div>
      </div>
    </section>
  );
}
