import React, {createRef, forwardRef, useRef} from "react";
const { motion } = require("framer-motion");

import { client } from "../lib/client";
import { HeroBanner, Product, AboutMe, Contact } from "../components";

const Home = ({ products, bannerData, aboutMeData, contactData }) => {

  const scrollDiv = createRef();
  const scrollSmoothHandler = () => {
    scrollDiv.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <HeroBanner heroBanner={bannerData.length && bannerData[0]} toScroll={scrollSmoothHandler}/>

      <div className="products-container container" ref={scrollDiv}>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1, x: 10 }}
          transition={{ duration: 0.7 }}
          className="products-heading"
        >
          <h1>Les cours</h1>
        </motion.div>

        <div className="product-main">
          {products?.map((product) => (
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1, x: 10 }}
              transition={{ duration: 0.7 }}
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
