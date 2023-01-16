import React, { useState } from "react";
import moment from "moment";
moment.locale("fr");
import { client, urlFor } from "../../lib/client";
import { Product } from "../../components";
import { useStateContext } from "../../context/StateContext";
import Contact from "../../components/Contact";

import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';

const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({

  '&:before': {
    display: 'none',
  },
}));

const AccordionSummary = styled((props) => (
  <MuiAccordionSummary
    expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: '0.9rem' }} />}
    {...props}
  />
))(({ theme }) => ({
  flexDirection: 'row-reverse',
  '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
    transform: 'rotate(90deg)',
  },
  '& .MuiAccordionSummary-content': {
    marginLeft: theme.spacing(1),
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: '1px solid rgba(0, 0, 0, .125)',
}));


const ProductDetails = ({ product, products, contactData }) => {

  const {
    image,
    name,
    details,
    place,
    firstDate,
    secondDate,
    staffOne,
    staffTwo,
    price,
  } = product;
  const [index, setIndex] = useState(0);
  const { decQty, incQty, qty, onAdd, setShowCart } = useStateContext();
  const handleBuyNow = () => {
    onAdd(product, qty);
    setShowCart(true);
  };
  const [bckBtn1, setBckBtn1] = useState(true);

  // Accordéon
  const [expanded, setExpanded] = React.useState();
  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

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

          <p className="price">{price}€</p>

          <p>{details}</p>
          <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
            <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
              <Typography>Collapsible Group Item #1</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum dolor
                sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
                sit amet blandit leo lobortis eget.
              </Typography>
            </AccordionDetails>
          </Accordion>

          <p>Lieu : {place}</p>

          <div className="date-container">
            <p>Date : </p>
            {/* btn 1 */}
            <button
              className={bckBtn1 ? "date-btn date-btn-active" : "date-btn"}
              onClick={() => setBckBtn1(true)}
              type="button"
            >
              {moment(firstDate).format("L")}
            </button>

            {/* btn 2 */}
            <button
              className={bckBtn1 ? "date-btn" : "date-btn date-btn-active"}
              onClick={() => setBckBtn1(false)}
              type="button"
            >
              {moment(secondDate).format("L")}
            </button>
          </div>

          <p>Effectif : {bckBtn1 ? staffOne : staffTwo}</p>

          <p>Programme : </p>
          {name === "Next level - 1 jour" && (
            <TableContainer>
              <Table sx={{ width: "30%", border: "1px solid black" }}>
                <TableHead>
                  <TableRow>
                    <TableCell
                      sx={{ border: "1px solid black" }}
                      sx={{ border: "1px solid black" }}
                      align="left"
                    >
                      10h - 17h
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  <TableRow>
                    <TableCell
                      sx={{ border: "1px solid black" }}
                      component="th"
                      scope="row"
                    >
                      introduction
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell
                      sx={{ border: "1px solid black" }}
                      component="th"
                      scope="row"
                    >
                      Présentation théorique
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell
                      sx={{ border: "1px solid black" }}
                      component="th"
                      scope="row"
                    >
                      démonstrations
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell
                      sx={{ border: "1px solid black" }}
                      component="th"
                      scope="row"
                    >
                      Session pratique
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell
                      sx={{ border: "1px solid black" }}
                      component="th"
                      scope="row"
                    >
                      Récapitulatif
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </TableContainer>
          )}

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
            <Product key={item._id} product={item} />
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
