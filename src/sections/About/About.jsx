import IntroVideo from "./IntroVideo";
import * as motion from "motion/react-client";
import "./About.scss";

export default function About() {
  return (
    <div>
      {/* start about section */}

      <section id="about" className="about">
        {/* start main container */}

        <div className="container">
          {/* start main header for section */}
          <h1 className="about__header header__section">About Me</h1>
          {/* end main header for section */}

          {/* start main container for section */}
          <article className="about__content">
            {/* start content section */}
            <section className="about__me">
              {/* start content about me */}

              <p className="about__info">
                I build modern frontends with React and Next.js, focusing on
                performance, clean architecture, and UI quality. My work usually
                starts with a Figma file and ends as a fast, predictable
                interface that behaves well across devices.
                <br />
                <br />
                I care about the details that make apps feel solid also
                component structure, rendering patterns, accessibility, and
                avoiding the small problems that turn into technical debt. I’m
                comfortable working with designers and backend teams,
                translating ideas into reusable components and solving the
                issues that appear between design and implementation.
                <br />
                <br />
                Most of my recent work involves Next.js (App Router),
                TypeScript, Tailwind, and Framer I enjoy improving loading
                speed, preventing unnecessary re-renders, and creating motion
                that supports the UX instead of distracting from it. <br />
                <br />
                Right now, I’m looking for a frontend role where clean code,
                collaboration, and shipping reliable UI matter.
              </p>

              {/* end content about me */}
            </section>
            {/* end content section */}

            {/* start video section */}
            <section className="about__intro-video">
              <IntroVideo />
            </section>
            {/* end video section */}
          </article>
          {/* end main container for section */}
        </div>

        {/* end main container */}
      </section>

      {/* end about section */}
    </div>
  );
}
