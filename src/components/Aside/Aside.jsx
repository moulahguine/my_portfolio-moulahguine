import "./Aside.scss";
import Image from "next/image";
import asideImage from "@/assets/images/hero-section/hero-img.webp";
import asideImage600 from "@/assets/images/hero-section/hero-img_600.webp";
import asideImage800 from "@/assets/images/hero-section/hero-img_800.webp";
import * as motion from "motion/react-client";
import Link from "next/link";
import socialLinks from "@/components/SocialLinks/socialLinksData";
import Location from "@/components/Location/Location";

function aside() {
  return (
    <aside className="aside" aria-labelledby="aside-heading">
      <main className="container">
        <section className="aside__profile">
          <figure className="aside__media">
            <Image
              className="aside__image"
              src={asideImage}
              srcSet={` ${asideImage600} 600w, ${asideImage800} 800w`}
              sizes="(max-width: 778px) 100vw, (max-width: 1130px) 50vw, 500px"
              alt="Portrait of Mohamed Oulahguine, Frontend Developer"
              loading="eager"
              decoding="async"
            />
            <figcaption className="sr-only">
              Portrait of Mohamed Oulahguine
            </figcaption>
          </figure>
          <div className="aside__info">
            <h2 id="aside-heading" className="aside__title">
              Mohamed Oulahguine
              <svg
                width="22"
                height="22"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                class="verified-badge"
              >
                <path
                  fill="#3A6FF8"
                  d="
      M12 1.8
      a2.2 2.2 0 0 1 2.1 1.5
      a2.2 2.2 0 0 0 3.2 1.2
      a2.2 2.2 0 0 1 3 3
      a2.2 2.2 0 0 0 1.2 3.2
      a2.2 2.2 0 0 1 0 4.2
      a2.2 2.2 0 0 0 -1.2 3.2
      a2.2 2.2 0 0 1 -3 3
      a2.2 2.2 0 0 0 -3.2 1.2
      a2.2 2.2 0 0 1 -4.2 0
      a2.2 2.2 0 0 0 -3.2 -1.2
      a2.2 2.2 0 0 1 -3 -3
      a2.2 2.2 0 0 0 -1.2 -3.2
      a2.2 2.2 0 0 1 0 -4.2
      a2.2 2.2 0 0 0 1.2 -3.2
      a2.2 2.2 0 0 1 3 -3
      a2.2 2.2 0 0 0 3.2 -1.2
      a2.2 2.2 0 0 1 2.1 -1.5
      z"
                />

                <path
                  fill="white"
                  d="M10.2 14.2l-2.6-2.6-1.4 1.4 4 4 7-7-1.4-1.4z"
                />
              </svg>
            </h2>
            <p className="aside__subtitle">
              Frontend Developer | Modern UI with Next.js, Tailwind & TypeScript
              | Detail-Focused
            </p>
          </div>
          <div className="aside__social">
            {socialLinks
              .filter(({ label }) =>
                ["LinkedIn", "GitHub", "upwork"].includes(label)
              )
              .map(({ href, label, color, icon: Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  style={{ "--social-color": color }}
                >
                  <Icon aria-hidden="true" />
                </a>
              ))}
          </div>
        </section>
        <section className="aside__details" aria-label="About">
          <div className="aside__content">
            <svg
              width="12"
              height="12"
              viewBox="0 0 12 12"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M4.5 2C3.12 2 2 3.12 2 4.5V10h3V4.5H3.5A1.5 1.5 0 0 1 5 3V2h-.5ZM9.5 2C8.12 2 7 3.12 7 4.5V10h3V4.5H8.5A1.5 1.5 0 0 1 10 3V2h-.5Z" />
            </svg>

            <p className="aside__description">
              Interfaces shaped with clarity, balance, and strong attention to
              detail. Smooth interaction, reliable performance, and layouts that
              feel intuitive on every device. A focus on structure and
              refinement, where every element supports the experience.
            </p>
            <svg
              width="12"
              height="12"
              viewBox="0 0 12 12"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M4.5 2C3.12 2 2 3.12 2 4.5V10h3V4.5H3.5A1.5 1.5 0 0 1 5 3V2h-.5ZM9.5 2C8.12 2 7 3.12 7 4.5V10h3V4.5H8.5A1.5 1.5 0 0 1 10 3V2h-.5Z" />
            </svg>

            <div className="aside__location">
              <address className="aside__locationText">
                <Location />
              </address>
            </div>
            <p className="aside__availability" role="status" aria-live="polite">
              <span aria-hidden="true">•</span> Available for work
            </p>
            <p className="aside__resume">
              <a
                href="/resume.pdf"
                download
                aria-label="Download resume as PDF"
              >
                Resume
              </a>
            </p>
          </div>
        </section>
      </main>
    </aside>
  );
}

export default aside;
