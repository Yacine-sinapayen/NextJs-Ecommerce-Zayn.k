import React from "react";
import Link from "next/link";

import { urlFor } from "../lib/client";

const Product = ({ product: { image, name, slug, price, details } }) => {
  return (
    <div>
      <Link href={`/product/${slug.current}`}>
        <div className="product-card">
          <img
            src={urlFor(image && image[0])}
            height={330}
            width={330}
            className="product-image"
            alt="image-du produit-zaynk"
          />
          <p className="product-name">{name}</p>
          <p className="product-details">{details}</p>
          <p className="product-price">{price} €</p>
        </div>
      </Link>
    </div>
  );
};

export default Product;
