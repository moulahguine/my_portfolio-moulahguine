"use client";

import { ExternalLinkIcon, GithubIcon } from "@/components/Icons/CustomIcons";
import "./ProjectLinks.scss";

export default function ProjectLinks({ demoLink, githubLink }) {
  const handleClick = (e, url) => {
    e.stopPropagation();
    e.preventDefault();
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <div className="project-card__links">
      <button
        onClick={(e) => handleClick(e, demoLink)}
        className="project-card__link demo"
        aria-label="View Live Demo"
        title="🔗 Live Demo"
      >
        <ExternalLinkIcon />
        <span>visit</span>
      </button>

      <button
        onClick={(e) => handleClick(e, githubLink)}
        className="project-card__link github"
        aria-label="View on GitHub"
        title="💻 GitHub Repo"
      >
        <GithubIcon />
        <span>source</span>
      </button>
    </div>
  );
}
