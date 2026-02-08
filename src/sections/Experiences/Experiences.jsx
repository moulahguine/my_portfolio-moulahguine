"use client";

import { useState } from "react";
import Image from "next/image";
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
import hireMeAvatar from "@/assets/images/expreriences-section/work/hire-me-avatar.png";
import "./Experiences.scss";
import { RiSendPlaneLine } from "react-icons/ri";

function Experiences({ mode = "full" }) {
  const isPreview = mode === "preview";
  const [activeTab, setActiveTab] = useState("education");
  const spring = { type: "spring", stiffness: 300, damping: 30 };

  const currentExperiences = getExperiences(
    activeTab,
    isPreview && activeTab !== "languages" ? PREVIEW_LIMIT : null
  );

  const totalCount = experienceData[activeTab]?.length || 0;
  const hasMore =
    isPreview && activeTab !== "languages" && totalCount > PREVIEW_LIMIT;

  const currentTabLabel =
    experienceTabs.find((tab) => tab.id === activeTab)?.label || "";

  const activeIndex = experienceTabs.findIndex((tab) => tab.id === activeTab);

  return (
    <section id="experiences" className="experiences">
      <div className="container">
        {/* Section Header */}
        <div className="experiences__header-container">
          <h1 className="experiences__header">Experience</h1>
          {hasMore && (
            <Link href="/experiences" className="experiences__view-all-link">
              View More {currentTabLabel} (+{totalCount - PREVIEW_LIMIT}){" "}
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
              "--tab-count": experienceTabs.length,
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
                        <span className="name">{lang.name}</span>
                        <span className="level">{lang.level}</span>
                        <span className="flag" aria-label={`${lang.name} flag`}>
                          <lang.flag title={lang.name} />
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
              ) : activeTab === "work" ? (
                <div className="experiences__hire-me">
                  <div className="content">
                    <motion.p
                      className="text"
                      initial={{ opacity: 0.5, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.2 }}
                    >
                      Actively moving into a full-time frontend position.
                    </motion.p>
                    <motion.button
                      className="button"
                      initial={{ opacity: 0.5, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.97 }}
                      transition={{ duration: 0.2 }}
                    >
                      <span>hire me</span>
                      <RiSendPlaneLine size={20} />
                    </motion.button>
                  </div>
                  <motion.div
                    className="avatar"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                  >
                    <Image
                      src={hireMeAvatar}
                      alt="Developer avatar"
                      width={700}
                      height={700}
                      priority
                    />
                  </motion.div>
                </div>
              ) : (
                <p className="experiences__empty">
                  No {currentTabLabel} to display.
                </p>
              )}
            </motion.div>
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}

export default Experiences;
