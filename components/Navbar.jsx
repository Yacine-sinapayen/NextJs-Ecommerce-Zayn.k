import React, { useState, useEffect } from "react";
import Link from "next/link";
import { AiOutlineShopping } from "react-icons/ai";

import { Cart } from "./";
import { useStateContext } from "../context/StateContext";
import Image from "next/image";
import LogoZaynk from "../assets/LogoZaynk.svg";
const { motion, AnimatePresence } = require("framer-motion");

const Navbar = ({ isVisible }) => {
  const { showCart, setShowCart, totalQuantities } = useStateContext();

  const [showNavbar, setShowNavbar] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 500) {
        setShowNavbar(true);
      } else {
        setShowNavbar(false);
      }
    });
  }, []);

  return (
    <>
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4 }}
        className={
          !showNavbar
            ? "navbar-container"
            : "navbar-container navbar-container-active"
        }
      >
        <div className="navbar-content">
          {showNavbar && (
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4 }}
              className="navbar-content-img"
            >
              <div className="navBar-logo-content">
                <h1>ZAYN.K</h1>
                <div className="navBar-logo-subtitile">
                  <span className="navBar-logo-line"></span>
                  <h2>Formation</h2>
                </div>
              </div>{" "}
            </motion.div>
          )}
          <button className="cart-icon" onClick={() => setShowCart(true)}>
            <AiOutlineShopping />
            <span className="cart-item-qty">{totalQuantities}</span>
          </button>
          {showCart && <Cart />}
        </div>
      </motion.div>
    </>
  );
};

export default Navbar;
