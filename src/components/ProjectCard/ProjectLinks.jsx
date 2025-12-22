"use client";

import { ExternalLinkIcon, GithubIcon } from "@/components/Icons/CustomIcons";
import "./ProjectLinks.scss";

export default function ProjectLinks({ demoLink, githubLink }) {
  return (
    <div className="project-card__links">
      <button
        onClick={() => window.open(demoLink, "_blank", "noopener,noreferrer")}
        className="project-card__link demo"
        aria-label="View Live Demo"
        title="🔗 Live Demo"
      >
        <ExternalLinkIcon />
        <span> visit</span>
      </button>

      <button
        onClick={() => window.open(githubLink, "_blank", "noopener,noreferrer")}
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
