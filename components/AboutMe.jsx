import React from "react";
import { urlFor } from "../lib/client";

const AboutMe = ({ aboutMe }) => {
  return (
    <div className="aboutMe-container">
      <div className="text-content">
        <h1>{aboutMe.aboutMeTitle}</h1>
        <p>{aboutMe.aboutMeDesc}</p>
      </div>
      <div className="aboutMe-img">
        <img 
        src={urlFor(aboutMe.image)} 
        alt="zaynk coiffeur" />
      </div>
    </div>
  );
};

export default AboutMe;
