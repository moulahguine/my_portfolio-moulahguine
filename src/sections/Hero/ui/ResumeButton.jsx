"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { PiFilePdfDuotone } from "react-icons/pi";
import { MdOutlineFileDownload } from "react-icons/md";
import { CiCircleCheck } from "react-icons/ci";

const RESUME_URL = "/resume/resume.pdf";

export default function ResumeButton() {
  const [isHovered, setIsHovered] = useState(false);
  const [isDownloaded, setIsDownloaded] = useState(false);
  const [ripples, setRipples] = useState([]);
  const timeoutRef = useRef(null);

  useEffect(() => {
    return () => clearTimeout(timeoutRef.current);
  }, []);

  function createRipple() {
    const id = Date.now() + Math.random();

    setRipples((prev) => [...prev, id]);

    setTimeout(() => {
      setRipples((prev) => prev.filter((item) => item !== id));
    }, 700);
  }

  function handleClick() {
    clearTimeout(timeoutRef.current);
    createRipple();
    setIsDownloaded(true);

    timeoutRef.current = setTimeout(() => {
      setIsDownloaded(false);
    }, 1200);
  }

  const showDownloadIcon = isHovered && !isDownloaded;

  return (
    <a
      href={RESUME_URL}
      download
      className="resume-btn"
      aria-label="Download my resume PDF"
      title="Download my resume PDF"
      onClick={handleClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <span className="resume-btn__icon-shell" aria-hidden="true">
        <span className="resume-btn__ripples">
          <AnimatePresence>
            {ripples.map((id) => (
              <motion.span
                key={id}
                className="resume-btn__ripple"
                initial={{ scale: 0.2, opacity: 0.5 }}
                animate={{ scale: 2.8, opacity: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.7, ease: "easeOut" }}
              />
            ))}
          </AnimatePresence>
        </span>

        <AnimatePresence mode="wait" initial={false}>
          {isDownloaded ? (
            <motion.span
              key="done"
              className="resume-btn__icon"
              initial={{ scale: 0.4, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.7, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <CiCircleCheck aria-hidden="true" />
            </motion.span>
          ) : showDownloadIcon ? (
            <motion.span
              key="download"
              className="resume-btn__icon"
              initial={{ y: 12, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -12, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <MdOutlineFileDownload aria-hidden="true" />
            </motion.span>
          ) : (
            <motion.span
              key="pdf"
              className="resume-btn__icon"
              initial={{ y: 12, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -12, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <PiFilePdfDuotone aria-hidden="true" />
            </motion.span>
          )}
        </AnimatePresence>
      </span>

      <AnimatePresence mode="wait" initial={false}>
        {!isDownloaded ? (
          <motion.span
            key="download-label"
            className="resume-btn__label"
            initial={{ scale: 0.4, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.7, opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            Download CV
          </motion.span>
        ) : (
          <motion.span
            key="done-label"
            className="resume-btn__label"
            initial={{ scale: 0.4, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.7, opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            Done!
          </motion.span>
        )}
      </AnimatePresence>
    </a>
  );
}
