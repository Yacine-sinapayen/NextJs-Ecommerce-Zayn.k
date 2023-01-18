import React from "react";
import { client } from "../lib/client";
import { Product } from "../components";

const { motion } = require("framer-motion");

const ProductsContainer = ({ productsData, scrollDiv }) => {
  const sortedProducts = productsData.slice().sort((a,b) => a.classement - b.classement);
 
  return (
    <>
      <div 
        className="products-container container" 
        ref={scrollDiv}>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="products-heading"
        >
          <h1>Les cours</h1>
        </motion.div>

        <div className="product-main">
          {sortedProducts?.map((product) => (
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
            >
              <Product key={product._id} product={product} />
            </motion.div>
          ))}
        </div>
      </div>
    </>
  );
};

export default ProductsContainer;
