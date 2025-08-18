import "./Hero.scss";
import heroImage from "../../assets/images/hero-section/hero-img.webp";
import { HiDownload } from "react-icons/hi";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiCodepen } from "react-icons/si";
import { useHeroHeight } from "../../hooks";
import Location from "../../components/Location/Location";
import { motion } from "framer-motion";

export default function Hero() {
  const heroHeight = useHeroHeight();

  return (
    <section
      style={{ height: `${heroHeight}px` }}
      id="home"
      className="hero"
      aria-label="Hero"
    >
      <motion.div
        className="hero__inner"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <motion.div
          className="hero__content"
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <motion.h1
            className="hero__title"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            Hi👋, I'm <span>mohamed oulahguine</span>
          </motion.h1>
          <motion.h1
            className="hero__subtitle"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            frontend developer
          </motion.h1>
          <motion.p
            className="hero__description"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.7 }}
          >
            Energetic frontend developer focused on <strong>performance</strong>
            , <strong>quality</strong>, & <strong>pixel-perfect details</strong>
            . I write clean, well-designed code to build smooth, create
            responsive websites with mobile first approach.
          </motion.p>
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.9 }}
          >
            <Location />
          </motion.div>
          <motion.div
            className="hero__resume"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 1.1 }}
          >
            <a className="btn" href="/resume.pdf" download>
              <HiDownload className="download__resume" />
              resume
            </a>
          </motion.div>
        </motion.div>
        <motion.div
          className="hero__media"
          aria-hidden="true"
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <img
            className="hero__image"
            src={heroImage}
            alt="Abstract developer illustration"
            loading="eager"
          />
        </motion.div>
        <motion.div
          className="hero__social"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.3 }}
        >
          <motion.a
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.95 }}
            href="https://github.com/moulahguine"
            target="_blank"
            rel="noopener noreferrer"
            className="social__link"
            aria-label="GitHub"
          >
            <FaGithub />
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.95 }}
            href="https://codepen.io/moulahguine"
            target="_blank"
            rel="noopener noreferrer"
            className="social__link"
            aria-label="CodePen"
          >
            <SiCodepen />
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.95 }}
            href="https://www.linkedin.com/in/moulahguine"
            target="_blank"
            rel="noopener noreferrer"
            className="social__link"
            aria-label="LinkedIn"
          >
            <FaLinkedin />
          </motion.a>
        </motion.div>
      </motion.div>
    </section>
  );
}
