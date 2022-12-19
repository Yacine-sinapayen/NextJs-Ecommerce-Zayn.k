import React, {createRef} from "react";
const { motion } = require("framer-motion");

import { client } from "../lib/client";
import { HeroBanner, ProductsContainer, Product, AboutMe, Contact } from "../components";

const Home = ({ productsData, bannerData, aboutMeData, contactData }) => {

  const scrollDiv = createRef();
  const scrollSmoothHandler = () => {
    scrollDiv.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <HeroBanner heroBanner={bannerData.length && bannerData[0]} toScroll={scrollSmoothHandler}/>

      <ProductsContainer productsData={productsData} scrollDiv={scrollDiv}/>

      <AboutMe aboutMe={aboutMeData.length && aboutMeData[0]} />

      <Contact contact={contactData.length && contactData[0]} />
    </>
  );
};

export const getServerSideProps = async () => {
  const bannerQuery = '*[_type == "banner"]';
  const bannerData = await client.fetch(bannerQuery);

  const productsQuery = '*[_type == "product"]';
  const productsData = await client.fetch(productsQuery);
  console.log(productsData);

  const aboutMeQuery = '*[_type == "aboutMe"]';
  const aboutMeData = await client.fetch(aboutMeQuery);

  const contactQuery = '*[_type == "contact"]';
  const contactData = await client.fetch(contactQuery);

  return {
    props: { productsData, bannerData, aboutMeData, contactData },
  };
};

export default Home;
