"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "motion/react";
import {
  experienceTabs,
  getExperiences,
  PREVIEW_LIMIT,
  experienceData,
} from "@/data/experienceData";
import ExperienceCard from "@/components/ExperienceCard/ExperienceCard";
import { GoArrowUpRight } from "react-icons/go";
import "./Experiences.scss";

const spring = { type: "spring", stiffness: 300, damping: 30 };

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
    visibleTabs.some(
      (tab) => (experienceData[tab.id]?.length || 0) > PREVIEW_LIMIT
    );

  const currentTabLabel =
    experienceTabs.find((tab) => tab.id === activeTab)?.label || "";

  // Only show tabs that have data
  const visibleTabs = experienceTabs.filter(
    (tab) => (experienceData[tab.id]?.length || 0) > 0
  );

  const activeIndex = visibleTabs.findIndex((tab) => tab.id === activeTab);

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
              "--tab-count": visibleTabs.length,
              transform: `translateX(${activeIndex * 100}%)`,
            }}
            aria-hidden="true"
          />

          {visibleTabs.map((tab) => (
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
        <motion.div
          layout
          transition={spring}
          className="experiences__timeline-wrapper"
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              id={`panel-${activeTab}`}
              role="tabpanel"
              aria-labelledby={activeTab}
              className="experiences__timeline"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
            >
              {currentExperiences.length > 0 ? (
                activeTab === "languages" ? (
                  <ul className="experiences__languages">
                    {currentExperiences.map((lang) => (
                      <li key={lang.id} className="experiences__language">
                        <span className="experiences__language-name">
                          {lang.name}
                        </span>
                        <span className="experiences__language-level">
                          {lang.level}
                        </span>
                        <span
                          className="experiences__language-flag"
                          aria-label={`${lang.name} flag`}
                        >
                          {lang.flag}
                        </span>
                      </li>
                    ))}
                  </ul>
                ) : (
                  currentExperiences.map((experience, index) => (
                    <ExperienceCard
                      key={experience.id}
                      experience={experience}
                      section={activeTab}
                      isLast={index === currentExperiences.length - 1}
                    />
                  ))
                )
              ) : (
                <p className="experiences__empty">
                  No experiences to display. 🙄
                </p>
              )}
            </motion.div>
          </AnimatePresence>
        </motion.div>

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
