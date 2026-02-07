import Image from "next/image";
import { FiExternalLink } from "react-icons/fi";
import "./ExperienceCard.scss";
import Link from "next/link";

function ExperienceCard({ experience, section, isLast }) {
  const {
    company,
    role,
    type,
    location,
    startDate,
    endDate,
    description,
    technologies,
    link,
    logo,
  } = experience;

  const dateRange = `${startDate} - ${endDate}`;

  return (
    <article
      className={`experience-card ${section ? `experience-card--${section}` : ""} ${isLast ? "experience-card--last" : ""}`}
    >
      {/* Timeline indicator */}
      <div className="experience-card__timeline">
        <span className="experience-card__dot" aria-hidden="true" />
        {!isLast && (
          <span className="experience-card__line" aria-hidden="true" />
        )}
      </div>

      {/* Card content */}
      <div className="experience-card__content">
        {/* Header row */}
        <div className="experience-card__header">
          {/* Logo or initials fallback */}
          <div className="experience-card__logo">
            {logo ? (
              <Image
                src={logo}
                alt={`${company} logo`}
                width={40}
                height={40}
                className="experience-card__logo-img"
                priority
              />
            ) : (
              <span className="experience-card__initials">
                {company.charAt(0).toUpperCase()}
              </span>
            )}
          </div>

          {/* Info */}
          <div className="experience-card__info">
            <div className="experience-card__title-row">
              <h3 className="experience-card__company">
                {link ? (
                  <Link
                    href={link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="experience-card__link"
                    aria-label={`Visit ${company} website (opens in new tab)`}
                    title={`Visit ${company} website`}
                  >
                    {company}
                    <FiExternalLink size={14} />
                  </Link>
                ) : (
                  company
                )}
              </h3>
              <span className="experience-card__date">{dateRange}</span>
            </div>
            <p className="experience-card__role">{role}</p>
            <div className="experience-card__meta">
              {type && <span className="experience-card__type">{type}</span>}
              {location && (
                <span className="experience-card__location">{location}</span>
              )}
            </div>
          </div>
        </div>

        {/* Description */}
        {description && description.length > 0 && (
          <ul className="experience-card__description">
            {description.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        )}

        {/* Technologies */}
        {technologies && technologies.length > 0 && (
          <div className="experience-card__technologies">
            {technologies.map((tech, index) => (
              <span key={index} className="experience-card__tech">
                {tech}
              </span>
            ))}
          </div>
        )}
      </div>
    </article>
  );
}

export default ExperienceCard;
