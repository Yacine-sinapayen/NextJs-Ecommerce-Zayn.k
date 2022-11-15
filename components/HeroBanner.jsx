import { Link } from "@mui/material";
import React from "react";

import { urlFor } from "../lib/client";

const HeroBanner = ({ heroBanner }) => {
  return (
    <div className="hero-banner-container">
      <img
        src={urlFor(heroBanner.image)}
        alt="zaynk coiffeur"
        className="hero-banner-image"
      />
      <div className="container-title-btn">
        <h3>{heroBanner.bannerTitle}</h3>
        <Link href="/product/ID">
          <button type="button">{heroBanner.buttonText}</button>
        </Link>
      </div>
    </div>
  );
};

export default HeroBanner;
