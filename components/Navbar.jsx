import React, { useState, useEffect } from "react";
import Link from "next/link";
import { AiOutlineShopping } from "react-icons/ai";

import { Cart } from "./";
import { useStateContext } from "../context/StateContext";
import Image from "next/image";
import instaLogo from "../assets/1.png";
const { motion, AnimatePresence } = require("framer-motion");

const Navbar = ({ isVisible }) => {
  const { showCart, setShowCart, totalQuantities } = useStateContext();

  const [activeNavbar, setActiveNavbar] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 500) {
        setActiveNavbar(true);
      } else {
        setActiveNavbar(false);
      }
    });
  }, []);

  return (
    <>
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4 }}
        className={activeNavbar ? "header background-white-active" : "header"}
      >
        <div className="navbar-content">
          {/* RÉSEAUX */}
          <div className="navBar-social">
            <Image width="20px" height="20px" src={instaLogo} />
          </div>

          {/* LOGO */}
          <div className="navBar-logo">
            <div className="navBar-logo-content">
              <h1 className={activeNavbar && "color-black-active"}>ZAYN.K</h1>
              <div className="navBar-logo-subtitile">
                <span
                  className={
                    activeNavbar
                      ? "background-black-active navBar-logo-line"
                      : "navBar-logo-line"
                  }
                ></span>
                <h2 className={activeNavbar && "color-black-active"}>
                  Formation
                </h2>
              </div>
            </div>
          </div>

          {/* PANIER */}
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
