import React from "react";
import "./SkeletonLoader.scss";

const SkeletonLoader = ({ type = "default", count = 1 }) => {
  const renderSkeleton = () => {
    switch (type) {
      case "about":
        return (
          <div className="skeleton-about">
            <div className="skeleton-about__header">
              <div className="skeleton-line skeleton-line--title"></div>
              <div className="skeleton-line skeleton-line--subtitle"></div>
            </div>
            <div className="skeleton-about__content">
              <div className="skeleton-about__image">
                <div className="skeleton-box skeleton-box--image"></div>
              </div>
              <div className="skeleton-about__text">
                <div className="skeleton-line skeleton-line--long"></div>
                <div className="skeleton-line skeleton-line--medium"></div>
                <div className="skeleton-line skeleton-line--short"></div>
                <div className="skeleton-line skeleton-line--medium"></div>
              </div>
            </div>
            <div className="skeleton-about__facts">
              {[...Array(4)].map((_, i) => (
                <div key={i} className="skeleton-fact">
                  <div className="skeleton-fact__icon"></div>
                  <div className="skeleton-fact__content">
                    <div className="skeleton-line skeleton-line--small"></div>
                    <div className="skeleton-line skeleton-line--medium"></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );

      case "projects":
        return (
          <div className="skeleton-projects">
            <div className="skeleton-projects__header">
              <div className="skeleton-line skeleton-line--title"></div>
              <div className="skeleton-line skeleton-line--subtitle"></div>
            </div>
            <div className="skeleton-projects__grid">
              {[...Array(3)].map((_, i) => (
                <div key={i} className="skeleton-project-card">
                  <div className="skeleton-project-card__image"></div>
                  <div className="skeleton-project-card__content">
                    <div className="skeleton-line skeleton-line--medium"></div>
                    <div className="skeleton-line skeleton-line--small"></div>
                    <div className="skeleton-project-card__tech">
                      {[...Array(4)].map((_, j) => (
                        <div key={j} className="skeleton-tech-tag"></div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );

      case "contact":
        return (
          <div className="skeleton-contact">
            <div className="skeleton-contact__header">
              <div className="skeleton-line skeleton-line--title"></div>
              <div className="skeleton-line skeleton-line--subtitle"></div>
            </div>
            <div className="skeleton-contact__content">
              <div className="skeleton-contact__info">
                <div className="skeleton-contact__item">
                  <div className="skeleton-box skeleton-box--icon"></div>
                  <div className="skeleton-line skeleton-line--medium"></div>
                </div>
                <div className="skeleton-contact__item">
                  <div className="skeleton-box skeleton-box--icon"></div>
                  <div className="skeleton-line skeleton-line--medium"></div>
                </div>
                <div className="skeleton-contact__item">
                  <div className="skeleton-box skeleton-box--icon"></div>
                  <div className="skeleton-line skeleton-line--medium"></div>
                </div>
              </div>
              <div className="skeleton-contact__form">
                <div className="skeleton-form-group">
                  <div className="skeleton-line skeleton-line--small"></div>
                  <div className="skeleton-input"></div>
                </div>
                <div className="skeleton-form-group">
                  <div className="skeleton-line skeleton-line--small"></div>
                  <div className="skeleton-input"></div>
                </div>
                <div className="skeleton-form-group">
                  <div className="skeleton-line skeleton-line--small"></div>
                  <div className="skeleton-textarea"></div>
                </div>
                <div className="skeleton-button"></div>
              </div>
            </div>
          </div>
        );

      case "skills":
        return (
          <div className="skeleton-skills">
            <div className="skeleton-skills__header">
              <div className="skeleton-line skeleton-line--title"></div>
              <div className="skeleton-line skeleton-line--subtitle"></div>
            </div>
            <div className="skeleton-skills__content">
              {[...Array(2)].map((_, i) => (
                <div key={i} className="skeleton-skills-row">
                  {[...Array(6)].map((_, j) => (
                    <div key={j} className="skeleton-skill-item">
                      <div className="skeleton-box skeleton-box--skill"></div>
                      <div className="skeleton-line skeleton-line--small"></div>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        );

      case "hero":
        return (
          <div className="skeleton-hero">
            <div className="skeleton-hero__content">
              <div className="skeleton-line skeleton-line--hero-title"></div>
              <div className="skeleton-line skeleton-line--hero-subtitle"></div>
              <div className="skeleton-hero__buttons">
                <div className="skeleton-button"></div>
                <div className="skeleton-button"></div>
              </div>
            </div>
            <div className="skeleton-hero__image">
              <div className="skeleton-box skeleton-box--hero-image"></div>
            </div>
          </div>
        );

      default:
        return (
          <div className="skeleton-default">
            <div className="skeleton-line skeleton-line--medium"></div>
            <div className="skeleton-line skeleton-line--short"></div>
            <div className="skeleton-line skeleton-line--long"></div>
          </div>
        );
    }
  };

  return (
    <div className="skeleton-loader">
      {[...Array(count)].map((_, index) => (
        <div key={index} className="skeleton-container">
          {renderSkeleton()}
        </div>
      ))}
    </div>
  );
};

export default SkeletonLoader;
