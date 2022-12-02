import React from "react";

import { client } from "../lib/client";
import {
  HeroBanner,
  Product,
  AboutMe,
  Contact,
  // FooterBanner,
} from "../components";

const Home = ({ products, bannerData, aboutMeData, contactData }) => {
  return (
    <>
      <HeroBanner heroBanner={bannerData.length && bannerData[0]} />
      <div className="products-heading">
        <h1>Les cours</h1>
      </div>

      <div className="products-container">
        {products?.map((product) => (
          <Product key={product._id} product={product} />
        ))}
      </div>
      <AboutMe aboutMe={aboutMeData.length && aboutMeData[0]} />
      <Contact contact={contactData.length && contactData[0]} />
      {/* <FooterBanner footerBanner={bannerData && bannerData[0]} /> */}
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
