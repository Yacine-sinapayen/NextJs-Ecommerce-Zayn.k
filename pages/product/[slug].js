import React, { useState } from "react";
import {
  AiOutlineMinus,
  AiOutlinePlus,
} from "react-icons/ai";
import { client, urlFor } from "../../lib/client";
import { Product } from '../../components';
import { useStateContext } from '../../context/StateContext'; 
import Contact from "../../components/Contact";


const ProductDetails = ({ product, products, contactData }) => {
  const { image, name, details, place, date, workforce, price } = product;
  const [index, setIndex] = useState(0);
  const { decQty, incQty, qty, onAdd, setShowCart } = useStateContext();

  const handleBuyNow = () => {
    onAdd(product, qty);
    setShowCart(true);
  }
  return (
    <>
      <div className="product-detail-container container">
        <div>
          <div className="product-detail-container-image">
            <img
              src={urlFor(image && image[index])}
              className="product-detail-image"
            />
          </div>
          <div className="small-images-container">
            {image?.map((item, i) => (
              <img
                key={i}
                src={urlFor(item)}
                className={
                  i === index ? "small-image selected-image" : "small-image"
                }
                onMouseEnter={() => setIndex(i)}
              />
            ))}
          </div>
        </div>

        <div className="product-detail-desc">
          <h1>{name}</h1>

          <p>Détails : {details}</p>

          <p>Lieu : {place}</p>
          
          <p>Date : {date}</p>

          <p>Effectif : {workforce}</p>

          <p className="price">{price}€</p>

          {/* CTA */}
          <div className="quantity">
            <h3>Quantité:</h3>
            <p className="quantity-desc">
              <span className="minus" onClick={decQty}>
                <AiOutlineMinus />
              </span>
              <span className="num">{qty}</span>
              <span className="plus" onClick={incQty}>
                <AiOutlinePlus />
              </span>
            </p>
          </div>
          <div className="buttons">
            <button
              type="button"
              className="add-to-cart"
             onClick={() => onAdd(product, qty)}
            >
             Ajouté au panier
            </button>
            <button type="button" className="buy-now" onClick={handleBuyNow}>
              Acheter maintenant
            </button>
          </div>
        </div>
      </div>

      {/* Vous pouvez également aimer */}
      <div className="maylike-products-wrapper">
        <h2>Vous pouvez également aimer</h2>
        <div className="maylike-products-container">
          {products.map((item) => (
            <Product key={item._id} product={item}/>
          ))}
        </div>
      </div>

      {/* contact */}
      <Contact contact={contactData.length && contactData[0]} />
    </>
  );
};

export const getStaticPaths = async () => {
  const query = `*[_type == "product"]{
        slug{
            current
        }
    }`;

  const products = await client.fetch(query);

  const paths = products.map((product) => ({
    params: {
      slug: product.slug.current,
    },
  }));

  return {
    paths,
    fallback: "blocking",
  };
};

export const getStaticProps = async ({ params: { slug } }) => {
  const query = `*[_type == "product" && slug.current == '${slug}'][0]`;
  const productsQuery = '*[_type == "product"]';

  const product = await client.fetch(query);
  const products = await client.fetch(productsQuery);

  const contactQuery = '*[_type == "contact"]';
  const contactData = await client.fetch(contactQuery);

  return {
    props: { products, product, contactData },
  };
};

export default ProductDetails;
