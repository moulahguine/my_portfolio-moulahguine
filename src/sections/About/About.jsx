import * as motion from "motion/react-client";
import "./About.scss";

export default function About() {
  return (
    <>
      {/* start about section */}

      <section id="about" className="about">
        {/* start main container */}

        <div className="container">
          {/* start main header for section */}
          <h1 className="about__header header__section">How I Work</h1>
          {/* end main header for section */}

          {/* start main container for section */}
          <article className="about__content">
            {/* start content about me */}

            <p className="about__info">
              I focus on building interfaces that feel fast, predictable, and
              easy to use. I care about the details that usually cause problems
              later, like component structure, rendering behavior, and
              accessibility. I work comfortably with designers and backend teams
              to turn ideas into clear, reusable UI. Most of my recent work uses
              Next.js (App Router), TypeScript, Tailwind, and Framer Motion,
              with an emphasis on performance and purposeful motion.
            </p>

            {/* end content about me */}
          </article>
          {/* end main container for section */}
        </div>

        {/* end main container */}
      </section>

      {/* end about section */}
    </>
  );
}
