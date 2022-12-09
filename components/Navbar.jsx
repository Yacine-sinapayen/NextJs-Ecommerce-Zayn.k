import React from "react";
import Link from "next/link";
import { AiOutlineShopping } from "react-icons/ai";

import { Cart } from "./";
import { useStateContext } from "../context/StateContext";
import Image from "next/image";
import LogoZaynk from "../assets/LogoZaynk.svg";
const { motion, AnimatePresence } = require("framer-motion");

const Navbar = ({ isVisible }) => {
  const { showCart, setShowCart, totalQuantities } = useStateContext();

  return (
    <>
      <motion.div
        initial={{ opacity: 0, scale: 0.5}}
        animate={{ opacity: 1, scale: 1}}
        transition={{ duration: 0.4 }}
      >
        <div className="navbar-container">
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
