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
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";

const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  "&:before": {
    display: "none",
  },
}));

const AccordionSummary = styled((props) => (
  <MuiAccordionSummary
    expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: "0.9rem" }} />}
    {...props}
  />
))(({ theme }) => ({
  flexDirection: "row-reverse",
  "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
    transform: "rotate(90deg)",
  },
  "& .MuiAccordionSummary-content": {
    marginLeft: theme.spacing(1),
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: "1px solid rgba(0, 0, 0, .125)",
}));

const ProductDetails = ({ product, products, contactData }) => {
  const {
    image,
    name,
    price,
    place,
    description,
    detailsPartOne,
    detailsPartOneParaOne,
    detailsPartOneParaTwo,
    detailsPartOneParaThree,
    detailsPartOneParaFour,
    detailsPartTwo,
    detailsPartTwoParaOne,
    detailsPartTwoParaTwo,
    detailsPartTwoParaThree,
    detailsPartTwoParaFour,
    firstDate,
    secondDate,
    staffOne,
    staffTwo,
    titleDayOne,
    titleDayTwo,
    programDayOne,
    programDayTwo,
    tableData,
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

  console.log(tableData);
  return (
    <>
      <div className="product-detail-container container">
        {/* Part left image */}
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

        {/* Part right description */}
        <div className="product-detail-desc">
          <h1>{name}</h1>

          <p className="price mrgt20">{price}€</p>

          {/* Détails */}
          {/* <Accordion
            expanded={expanded === "panel1"}
            onChange={handleChange("panel1")}
          >
            <AccordionSummary
              aria-controls="panel1d-content"
              id="panel1d-header"
              sx={{ padding: "0px" }}
            >
              <Typography sx={{ fontFamily: "GlacialIndifference" }}>
                Détails :
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography
                sx={{ fontFamily: "GlacialIndifference", fontWeight: "bold" }}
              >
                {detailsPartOne}
              </Typography>
              <Typography
                sx={{ fontFamily: "GlacialIndifference", marginBottom: "10px" }}
              >
                {detailsPartOneParaOne}
              </Typography>
              <Typography
                sx={{ fontFamily: "GlacialIndifference", marginBottom: "10px" }}
              >
                {detailsPartOneParaTwo}
              </Typography>
              <Typography
                sx={{ fontFamily: "GlacialIndifference", marginBottom: "10px" }}
              >
                {detailsPartOneParaThree}
              </Typography>
              <Typography
                sx={{ fontFamily: "GlacialIndifference", marginBottom: "10px" }}
              >
                {detailsPartOneParaFour}
              </Typography>

              <Typography
                sx={{ fontFamily: "GlacialIndifference", fontWeight: "bold" }}
              >
                {detailsPartTwo}
              </Typography>
              <Typography
                sx={{ fontFamily: "GlacialIndifference", marginBottom: "10px" }}
              >
                {detailsPartTwoParaOne}
              </Typography>
              <Typography
                sx={{ fontFamily: "GlacialIndifference", marginBottom: "10px" }}
              >
                {detailsPartTwoParaTwo}
              </Typography>
              <Typography
                sx={{ fontFamily: "GlacialIndifference", marginBottom: "10px" }}
              >
                {detailsPartTwoParaThree}
              </Typography>
              <Typography
                sx={{ fontFamily: "GlacialIndifference", marginBottom: "10px" }}
              >
                {detailsPartTwoParaFour}
              </Typography>
            </AccordionDetails>
          </Accordion> */}

          {/* Détails */}
          <div>
            <h2 className="mrgt20">{detailsPartOne}</h2>
            <p className="mrgt20"> {detailsPartOneParaOne}</p>
            <p className="mrgt20"> {detailsPartOneParaTwo}</p>
            <p className="mrgt20"> {detailsPartOneParaThree}</p>
            <p className="mrgt20"> {detailsPartOneParaFour}</p>
            {detailsPartTwo && (
              <>
                <h2 className="mrgt20">{detailsPartTwo}</h2>
                <p className="mrgt20"> {detailsPartTwoParaOne}</p>
                <p className="mrgt20"> {detailsPartTwoParaTwo}</p>
                <p className="mrgt20"> {detailsPartTwoParaThree}</p>
                <p className="mrgt20"> {detailsPartTwoParaFour}</p>
              </>
            )}
          </div>

          <p>
            Participants : {bckBtn1 ? staffOne : staffTwo}
          </p>

          {/* Date */}
          {firstDate || secondDate ? (
            <div className="date-container mrgt20">
              <p>Date : </p>
              {/* btn 1 */}
              <button
                className={bckBtn1 ? "date-btn date-btn-active" : "date-btn"}
                onClick={() => setBckBtn1(true)}
                type="button"
              >
                {firstDate}
              </button>

              {/* btn 2 */}
              {secondDate && (
                <button
                  className={bckBtn1 ? "date-btn" : "date-btn date-btn-active"}
                  onClick={() => setBckBtn1(false)}
                  type="button"
                >
                  {/* {moment(secondDate).format("L")} */}
                  {secondDate}
                </button>
              )}
            </div>
          ) : (
            " "
          )}

          <p className="mrgt20">Lieu : {place}</p>

          {/* Programme */}
          {programDayOne && (
            <Accordion
              expanded={expanded === "panel1"}
              onChange={handleChange("panel1")}
            >
              <AccordionSummary
                aria-controls="panel1d-content"
                id="panel1d-header"
                sx={{ padding: "0px",  }}
              >
                <Typography sx={{ fontFamily: "GlacialIndifference"}}>
                  Programme :
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <TableContainer sx={{ display: "flex" }}>
                  {/* tableau 1 */}
                  <Table>
                    <TableHead>
                      <TableRow>
                        {/* colonne1 */}
                        <TableCell
                          sx={{
                            border: "1px solid rgba(75, 75, 75, 0.3)",
                            fontWeight: "bold",
                            fontFamily: "GlacialIndifference",
                          }}
                          align="left"
                        >
                          {titleDayOne}
                        </TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {programDayOne?.map((item, index) => (
                        <TableRow key={index}>
                          <TableCell
                            sx={{
                              border: "1px solid rgba(75, 75, 75, 0.3)",
                              fontFamily: "GlacialIndifference",
                            }}
                            component="th"
                            scope="row"
                          >
                            {item}
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                  {/* Tableau 2 */}
                  <Table>
                    <TableHead>
                      <TableRow>
                        {/* colonne2 */}
                        {titleDayTwo && (
                          <TableCell
                            sx={{
                              border: "1px solid rgba(75, 75, 75, 0.3)",
                              fontWeight: "bold",
                              fontFamily: "GlacialIndifference",
                            }}
                            align="left"
                          >
                            {titleDayTwo}
                          </TableCell>
                        )}
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {programDayTwo?.map((item, index) => (
                        <TableRow key={index}>
                          <TableCell
                            sx={{
                              border: "1px solid rgba(75, 75, 75, 0.3)",
                              fontFamily: "GlacialIndifference",
                            }}
                            component="th"
                            scope="row"
                          >
                            {item}
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </TableContainer>
              </AccordionDetails>
            </Accordion>
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
