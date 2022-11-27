import React, { useState, useEffect } from "react";
import Link from "next/link";
import { BsBagCheckFill } from "react-icons/bs";
import { useRouter } from "next/router";

import { useStateContext } from "../context/StateContext";

const success = () => {
  const { setCartItems, setTotalPrice, setTotalQuantities } = useStateContext();

  // On success i want to reset all my stateContext to start a new purchase process.
  useEffect(() => {
    localStorage.clear();
    setCartItems([]);
    setTotalPrice(0);
    setTotalQuantities(0);
  }, []);

  return (
    <div className="success-wrapper">
      <div className="success">
        <p className="icon">
          <BsBagCheckFill />
        </p>
        <h2>Bienvenue dans la communauté Zayn.k</h2>
        <p className="email-msg">Vérifier votre boîte mail pour la facture.</p>
        <p className="description">
          Si vous avez des questions, veuillez envoyer un email à
          <a href="safar.kamal@gmail.com" className="email">
            safar.kamal@gmail.com
          </a>
        </p>
        <p>Le meilleurs investissment c'est en toi même. </p>
        <Link href="/">
          <button className="btn" type="button" width="300px">
            Poursuivre tes achats
          </button>
        </Link>
      </div>
    </div>
  );
};

export default success;
