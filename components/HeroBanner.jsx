import { Link } from "@mui/material";
import React from "react";
import useDimension from '../hook/useDimension'

import { urlFor } from "../lib/client";
const { motion } = require("framer-motion");

const HeroBanner = ({ heroBanner, toScroll }) => {

  const browserWidth = useDimension();

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <img
        src={urlFor(heroBanner.image)}
        alt="zaynk coiffeur"
        className="hero-banner-image"
        style={{
          width: browserWidth < 800 && '800px',
        }}
      />
    </motion.div>
  );
};

export default HeroBanner;
