import { FaCode, FaLightbulb, FaRocket, FaHeart } from "react-icons/fa";
import { MdOutlineSchool, MdOutlineWork } from "react-icons/md";
import { BiTargetLock } from "react-icons/bi";
import "./About.scss";
import aboutImage from "../../assets/images/about-section/about-img.jpg";

export default function About() {
  const highlights = [
    {
      icon: <FaCode />,
      title: "Clean Code",
      description: "Writing maintainable, scalable, and well-documented code",
    },
    {
      icon: <FaLightbulb />,
      title: "Problem Solver",
      description: "Creative solutions to complex technical challenges",
    },
    {
      icon: <FaRocket />,
      title: "Fast Performance",
      description: "Optimized applications with lightning-fast load times",
    },
    {
      icon: <FaHeart />,
      title: "User-Focused",
      description: "Creating intuitive and delightful user experiences",
    },
  ];

  return (
    <section id="about" className="about">
      <div className="container">
        <div className="about__header">
          <h2 className="section-title">About Me</h2>
          <p className="section-subtitle">My introduction</p>
        </div>

        <div className="about__content">
          <div className="about__main">
            <div className="about__text">
              <h3>Who I Am</h3>

              <p>
                Frontend Developer who creates responsive, high-performance
                websites and web applications. Skilled in React, JavaScript,
                Tailwind CSS, and HTML, I build clean, reusable components and
                write maintainable code. I deliver pixel-perfect designs, smooth
                user experiences, and solutions that are optimized for speed and
                scalability.
              </p>

              <div className="about__journey">
                <div className="journey-item">
                  <MdOutlineSchool className="journey-icon" />
                  <div className="journey-content">
                    <h4>Education</h4>
                    <p>
                      Software Engineering Student specializing in Web
                      Development
                    </p>
                  </div>
                </div>

                <div className="journey-item">
                  <MdOutlineWork className="journey-icon" />
                  <div className="journey-content">
                    <h4>Experience</h4>
                    <p>3+ years building web applications</p>
                  </div>
                </div>

                <div className="journey-item">
                  <BiTargetLock className="journey-icon" />
                  <div className="journey-content">
                    <h4>Focus</h4>
                    <p>Frontend Development</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="about__image">
              <div className="image-container">
                <div className="image-placeholder">
                  <img src={aboutImage} alt="" />
                </div>
              </div>
            </div>
          </div>

          <div className="about__highlights">
            <h3>What I Bring to the Table</h3>
            <div className="highlights-grid">
              {highlights.map((highlight, index) => (
                <div key={index} className="highlight-card">
                  <div className="highlight-icon">{highlight.icon}</div>
                  <h4>{highlight.title}</h4>
                  <p>{highlight.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
