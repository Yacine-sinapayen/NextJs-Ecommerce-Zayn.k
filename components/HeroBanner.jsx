import { Link } from "@mui/material";
import React from "react";

import { urlFor } from "../lib/client";
const { motion } = require("framer-motion");

const HeroBanner = ({ heroBanner }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="hero-banner-container">
        <img
          src={urlFor(heroBanner.image)}
          alt="zaynk coiffeur"
          className="hero-banner-image"
        />
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9 }}
        >
          <div className="banner-logo-content">
            <h1>ZAYN.K</h1>
            <div className="banner-logo-subtitile">
              <span className="banner-logo-line"></span>
              <h2>Formation</h2>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
        >
          <div className="container-title-btn">
            {/* <h3>{heroBanner.bannerTitle}</h3> */}
            <Link href="/product/ID">
              <button type="button">{heroBanner.buttonText}</button>
            </Link>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default HeroBanner;
