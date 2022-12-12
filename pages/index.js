import React from "react";
const { motion } = require("framer-motion");

import { client } from "../lib/client";
import { HeroBanner, Product, AboutMe, Contact } from "../components";

const Home = ({ products, bannerData, aboutMeData, contactData }) => {
  return (
    <>
      <HeroBanner heroBanner={bannerData.length && bannerData[0]} />

      <div className="products-container container">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1, y: -10 }}
          transition={{ duration: 0.5 }}
          className="products-heading"
        >
          <h1>Les cours</h1>
        </motion.div>

        <div className="product-main">
          {products?.map((product) => (
            <motion.div
              initial={{ opacity: 0 }}
              // whileInView={{ opacity: 1, scale: 1 }}
              whileInView={{ opacity: 1, y: -10 }}
              transition={{ duration: 1 }}
            >
              <Product key={product._id} product={product} />
            </motion.div>
          ))}
        </div>
      </div>

      <AboutMe aboutMe={aboutMeData.length && aboutMeData[0]} />

      <Contact contact={contactData.length && contactData[0]} />
    </>
  );
};

export const getServerSideProps = async () => {
  const bannerQuery = '*[_type == "banner"]';
  const bannerData = await client.fetch(bannerQuery);

  const query = '*[_type == "product"]';
  const products = await client.fetch(query);

  const aboutMeQuery = '*[_type == "aboutMe"]';
  const aboutMeData = await client.fetch(aboutMeQuery);

  const contactQuery = '*[_type == "contact"]';
  const contactData = await client.fetch(contactQuery);

  return {
    props: { products, bannerData, aboutMeData, contactData },
  };
};

export default Home;
