import "./About.scss";
import Button from "@/components/Button/Button";
import IntroVideo from "./IntroVideo";
import ClipPathUnits from "@/components/clipPathUnits/clipPathUnits";
import { PiGithubLogoBold } from "react-icons/pi";
import { LuRocket } from "react-icons/lu";
import { FaRegLightbulb } from "react-icons/fa";
import { FiPenTool } from "react-icons/fi";
import { TbCode } from "react-icons/tb";

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
    <>
      <ClipPathUnits />
      <section id="about" className="about">
        <div className="container">
          <main className="content">
            <header className="about__header">
              <h2 className="about__title">About Me</h2>
              <p className="about__subtitle">
                Who I Am & What I Build as a Developer
              </p>
            </header>
            <div className="about__info">
              <div className="about__intro">
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
                  TypeScript, Tailwind, and Framer Motion. I enjoy improving
                  loading speed, preventing unnecessary re-renders, and creating
                  motion that supports the UX instead of distracting from it.{" "}
                  <br />
                  <br />
                  Right now, I’m looking for a frontend role where clean code,
                  collaboration, and shipping reliable UI matter.
                </p>
              </div>

              <div className="about__btn">
                <Button
                  icon={<PiGithubLogoBold />}
                  href="#projects"
                  className="show__projects"
                >
                  See My Work
                </Button>
              </div>
            </div>
          </main>
          <aside className="about__intro-video">
            <IntroVideo />
            <div className="facts-ring" aria-hidden="true">
              <span className="facts-ring__circle"></span>
            </div>
            <div className="facts-cards">
              {quickFacts.map((fact, index) => {
                const positions = ["tl", "tr", "br", "bl"];
                const pos = positions[index] || "tl";
                return (
                  <article
                    key={index}
                    className={`fact-card fact-card--${pos}`}
                  >
                    <header className="fact-card__header">
                      <h3 className="fact-card__title">
                        <span className="fact-card__icon">{fact.icon}</span>
                        {fact.label}
                      </h3>
                    </header>
                    <p className="fact-card__text">{fact.value}</p>
                  </article>
                );
              })}
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}
