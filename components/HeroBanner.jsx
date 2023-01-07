import React from "react";
import { urlFor } from "../lib/client";
const { motion } = require("framer-motion");
// import ReactPlayer from "react-player";

const HeroBanner = ({ heroBanner, toScroll }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="hero-banner-container"
    >
      <img
        src={urlFor(heroBanner.image)}
        alt="zaynk coiffeur"
        className="hero-banner-image"
      />

      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="hero-banner-btn">
          <button className="btn" onClick={toScroll} type="button">
            {heroBanner.buttonText}
          </button>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default HeroBanner;
