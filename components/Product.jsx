import React, { forwardRef } from "react";
import Link from "next/link";

import { urlFor } from "../lib/client";
const { motion } = require("framer-motion");

const Product = ({ product: { image, name, slug, price, description,  details, classement }}) => {

  return (
    <motion.div whileHover={{ scale: 1.01, duration: 1 }}>
      <Link href={`/product/${slug.current}`}>
        <div
          className="product-card"
          id="product-card"
        >
          <img
            src={urlFor(image && image[0])}
            className="product-image"
            alt="image du produit zaynk"
          />
          <p className="product-name">{name}</p>
          <p className="product-details">{description}</p>
          {/* <p className="product-details">{details}</p> */}
          <p className="product-price">{price} €</p>
        </div>
      </Link>
    </motion.div>
  );
};

export default Product;
