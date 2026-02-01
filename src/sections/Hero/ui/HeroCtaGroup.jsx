"use client";

import { useState } from "react";
import { FaRegFileAlt } from "react-icons/fa";
import { RxPerson } from "react-icons/rx";
import { PiShareFatLight } from "react-icons/pi";
import HeroButton from "./HeroCtaButton";
import ConnectLinks from "./ConnectLinks";
import SharePortfolio from "./SharePortfolio";

const EXPANDED_RESUME = "resume";
const EXPANDED_CONNECT = "connect";
const EXPANDED_SHARE = "share";

export default function HeroCtaGroup() {
  const [expandedId, setExpandedId] = useState(EXPANDED_RESUME);

  return (
    <div
      className="hero__cta"
      onMouseLeave={() => setExpandedId(EXPANDED_RESUME)}
      role="group"
      aria-label="Hero actions"
    >
      <HeroButton
        as="a"
        href="/resume.pdf"
        download
        icon={FaRegFileAlt}
        label="Resume"
        variant="resume"
        isExpanded={expandedId === EXPANDED_RESUME}
        onMouseEnter={() => setExpandedId(EXPANDED_RESUME)}
        aria-label="Download resume (PDF)"
        title="Download resume"
      />

      <ConnectLinks
        renderTrigger={({ open }) => (
          <HeroButton
            as="button"
            icon={RxPerson}
            label="Find Me Online"
            variant="light"
            isExpanded={expandedId === EXPANDED_CONNECT}
            onMouseEnter={() => setExpandedId(EXPANDED_CONNECT)}
            onClick={open}
            aria-label="Open social links"
            title="Find Me Online"
          />
        )}
      />

      <SharePortfolio
        renderTrigger={({ open }) => (
          <HeroButton
            as="button"
            icon={PiShareFatLight}
            label="Share "
            variant="light"
            isExpanded={expandedId === EXPANDED_SHARE}
            onMouseEnter={() => setExpandedId(EXPANDED_SHARE)}
            onClick={open}
            aria-label="Share portfolio"
            title="Share portfolio"
          />
        )}
      />
    </div>
  );
}
