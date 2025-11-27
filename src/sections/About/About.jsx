import "./About.scss";
import Button from "@/components/Button/Button";
import IntroVideo from "./IntroVideo";
import { PiGithubLogoBold } from "react-icons/pi";
import { LuRocket } from "react-icons/lu";
import { FaRegLightbulb } from "react-icons/fa";
import { FiPenTool } from "react-icons/fi";
import { TbCode } from "react-icons/tb";
import * as motion from "motion/react-client";

export default function About() {
  const quickFacts = [
    {
      icon: <LuRocket />,
      label: "delivery",
      value: "testing • optimization • deployment • long-term maintanability ",
    },
    {
      icon: <FaRegLightbulb />,
      label: "strategy",
      value: "clear project goals • user flow planning • technical direction",
    },
    {
      icon: <TbCode />,
      label: "frontend development",
      value:
        "NextJs • TypeScript • React • Architecture • integrations • performance",
    },
    {
      icon: <FiPenTool />,
      label: "UI/UX design",
      value: "Structure • layout • responsice behavior • interaction planning",
    },
  ];

  return (
    <div>
      {/* start about section */}

      <section id="about" className="about">
        {/* start main container */}

        <div className="container">
          {/* start main header for section */}
          <header className="about__header header__section">About Me</header>
          {/* end main header for section */}

          {/* start main container for section */}
          <main className="about__content">
            {/* start content section */}
            <section className="about__me">
              {/* start content about me */}
              <div className="about__info">
                <p>
                  I build modern frontends with React and Next.js, focusing on
                  performance, clean architecture, and UI quality. My work
                  usually starts with a Figma file and ends as a fast,
                  predictable interface that behaves well across devices.
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
              </div>
              {/* end content about me */}
            </section>
            {/* end content section */}
            {/* start video section */}
            <section className="about__intro-video">
              <IntroVideo />
            </section>
            {/* end video section */}

            {/* start fact crads */}
            <section className="about__facts">
              {quickFacts.map((fact, index) => (
                <article key={index} className="fact-card">
                  <div className="fact-card__icon">{fact.icon}</div>
                  <div className="fact-card__content">
                    <p className="fact-card__label">{fact.label}</p>
                    <p className="fact-card__text">{fact.value}</p>
                  </div>
                </article>
              ))}
            </section>
            {/* end fact crads */}
          </main>
          {/* end main container for section */}
        </div>

        {/* end main container */}
      </section>

      {/* end about section */}
    </div>
  );
}

{
  /* <p className="about__intro">
                Interfaces shaped with clarity, balance, and strong attention to
                detail. Smooth interaction, reliable performance, and layouts
                that feel intuitive on every device. A focus on structure and
                refinement, where every element supports the experience.
              </p> */
}

{
  /* <div className="about__btn">
  <Button
    icon={<PiGithubLogoBold />}
    href="#projects"
    className="show__projects"
  >
    See My Work
  </Button>
</div>; */
}
