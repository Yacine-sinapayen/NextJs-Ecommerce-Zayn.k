import React from "react";
import { client } from "../lib/client";
import { Product } from "../components";

const { motion } = require("framer-motion");

const ProductsContainer = ({ productsData, scrollDiv }) => {
  return (
    <>
      <div 
        className="products-container container" 
        ref={scrollDiv}>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1, x: 10 }}
          transition={{ duration: 0.7 }}
          className="products-heading"
        >
          <h1>Les cours</h1>
        </motion.div>

        <div className="product-main">
          {productsData?.map((product) => (
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
    </>
  );
};

export default ProductsContainer;
