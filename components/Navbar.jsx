import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from 'next/router'
import { AiOutlineShopping } from "react-icons/ai";

import { Cart } from "./";
import { useStateContext } from "../context/StateContext";
import Image from "next/image";
import instaLogo from "../assets/1.png";
import zaynkLogo from "../assets/Logo-transparent.png";
const { motion } = require("framer-motion");

const Navbar = ({ isVisible }) => {
  const { showCart, setShowCart, totalQuantities } = useStateContext();
  const router = useRouter()
  const [activeNavbar, setActiveNavbar] = useState(false);
  const location = router.pathname === '/';

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
        style={{background: !location && 'white'}}
      >
        <div className="navbar-content">
          {/* RÉSEAUX */}
          <Link  href={`https://www.instagram.com/kamalsafar_`} target="_blank">
            <div className="navBar-social">
              <Image width="25px" height="25px" src={instaLogo} />
            </div>
          </Link>

          {/* LOGO */}
          <Link href={`/`}>
            <div className="navBar-logo">
              <div className="navBar-logo-content">
                <h1 
                className={activeNavbar && "color-black-active"}
                style={{color: !location && '#4b4b4b'}}
                >ZAYN.K</h1>
                <div className="navBar-logo-subtitile">
                  <span
                    className={
                      activeNavbar
                        ? "background-black-active navBar-logo-line"
                        : "navBar-logo-line"
                    }
                    style={{background: !location && '#4b4b4b'}}
                  ></span>
                  <h2 
                  className={activeNavbar && "color-black-active"}
                  style={{color: !location && '#4b4b4b'}}>
                    COIFFURE MASCULINE
                  </h2>
                </div>
              </div>
            </div>
            {/* <div>
              <Image width="150px" height="150px" src={zaynkLogo} />
            </div> */}
          </Link>

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
