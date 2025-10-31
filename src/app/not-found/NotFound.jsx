"use client";

import React from "react";
import { motion } from "framer-motion";
import Button from "../../components/Button/Button";
import "./NotFound.scss";

const NotFound = () => {
  return (
    <motion.section
      className="not-found"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
    >
      <div className="not-found__container">
        <motion.div
          className="not-found__content"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
        >
          <div className="not-found__number">
            <motion.h1
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
            >
              404
            </motion.h1>
          </div>

          <motion.div
            className="not-found__text"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.6 }}
          >
            <h2>Oops! Page Not Found</h2>
          </motion.div>

          <motion.div
            className="not-found__actions"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.8 }}
          >
            <Button href="/" className="not-found__btn">
              Back to Home
            </Button>
            <Button href="/contact" className="not-found__btn secondary">
              Get in Touch
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default NotFound;
