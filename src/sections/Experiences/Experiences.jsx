"use client";

import { useState } from "react";
import { experienceData, experienceTabs } from "@/data/experienceData";
import ExperienceCard from "./ExperienceCard";
import "./Experiences.scss";

function Experiences() {
  const [activeTab, setActiveTab] = useState("work");

  const currentExperiences = experienceData[activeTab] || [];
  const activeIndex = experienceTabs.findIndex((tab) => tab.id === activeTab);

  return (
    <section id="experiences" className="experiences">
      <div className="container">
        {/* Section Header */}
        <h1 className="experiences__header">Experience</h1>

        {/* Tabs */}
        <div
          className="experiences__tabs"
          role="tablist"
          aria-label="Experience categories"
        >
          {/* Sliding indicator */}
          <span
            className="experiences__indicator"
            style={{
              transform: `translateX(${activeIndex * 100}%)`,
            }}
            aria-hidden="true"
          />

          {experienceTabs.map((tab) => (
            <button
              key={tab.id}
              role="tab"
              aria-selected={activeTab === tab.id}
              aria-controls={`panel-${tab.id}`}
              className={`experiences__tab ${activeTab === tab.id ? "active" : ""}`}
              onClick={() => setActiveTab(tab.id)}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Timeline Content */}
        <div
          id={`panel-${activeTab}`}
          role="tabpanel"
          aria-labelledby={activeTab}
          className="experiences__timeline"
        >
          {currentExperiences.length > 0 ? (
            currentExperiences.map((experience, index) => (
              <ExperienceCard
                key={experience.id}
                experience={experience}
                isLast={index === currentExperiences.length - 1}
              />
            ))
          ) : (
            <p className="experiences__empty">No experiences to display. 🙄</p>
          )}
        </div>
      </div>
    </section>
  );
}

export default Experiences;
