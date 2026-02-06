"use client";

import { useState } from "react";
import Link from "next/link";
import {
  experienceTabs,
  getExperiences,
  PREVIEW_LIMIT,
  experienceData,
} from "@/data/experienceData";
import ExperienceCard from "@/components/ExperienceCard/ExperienceCard";
import { GoArrowUpRight } from "react-icons/go";
import "./Experiences.scss";

function Experiences({ mode = "full" }) {
  const [activeTab, setActiveTab] = useState("education");

  const isPreview = mode === "preview";

  const currentExperiences = getExperiences(
    activeTab,
    isPreview ? PREVIEW_LIMIT : null
  );

  const totalCount = experienceData[activeTab]?.length || 0;
  const hasMore = isPreview && totalCount > PREVIEW_LIMIT;

  const hasAnyMore =
    isPreview &&
    experienceTabs.some(
      (tab) => (experienceData[tab.id]?.length || 0) > PREVIEW_LIMIT
    );

  const currentTabLabel =
    experienceTabs.find((tab) => tab.id === activeTab)?.label || "";

  const activeIndex = experienceTabs.findIndex((tab) => tab.id === activeTab);

  return (
    <section id="experiences" className="experiences">
      <div className="container">
        {/* Section Header */}
        <div className="experiences__header-container">
          <h1 className="experiences__header">Experience</h1>
          {hasAnyMore && (
            <Link href="/experiences" className="experiences__view-all-link">
              View All
              <GoArrowUpRight size={18} />
            </Link>
          )}
        </div>

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
              <tab.icon size={18} />
              <span className="label">{tab.label}</span>
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

        {/* View All Button */}
        {hasMore && (
          <div className="experiences__footer">
            <Link href="/experiences" className="experiences__view-all-btn">
              View all {currentTabLabel} ({totalCount - PREVIEW_LIMIT} more)
              <GoArrowUpRight size={18} />
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}

export default Experiences;
