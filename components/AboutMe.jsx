import React from "react";
import { urlFor } from "../lib/client";
const { motion } = require("framer-motion");


const AboutMe = ({ aboutMe }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1, x: 10 }}
      transition={{ duration: 0.7 }}
      className="container aboutMe-container"
    >
      <div className="text-content">
        <h1 className="text-content-title">{aboutMe.aboutMeTitle}</h1>
        <p>{aboutMe.aboutMeDesc}</p>
      </div>
      <div className="aboutMe-img">
        <img src={urlFor(aboutMe.image)} alt="zaynk coiffeur" />
      </div>
    </motion.div>
  );
};

export default AboutMe;
