"use client";

import "./Filters.scss";

const FILTERS = ["All", "Next.js", "React"];

export default function Filters({ activeFilter, onFilterChange }) {
  return (
    <div className="projects-filters">
      {FILTERS.map((filter) => (
        <button
          key={filter}
          className={`projects-filters__button ${
            activeFilter === filter ? "active" : ""
          }`}
          onClick={() => onFilterChange(filter)}
          aria-label={`Filter projects by ${filter}`}
        >
          {filter}
        </button>
      ))}
    </div>
  );
}
