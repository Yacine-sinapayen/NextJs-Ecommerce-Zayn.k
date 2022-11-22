import React from "react";
import Head from "next/head";
import Navbar from "./Navbar";
import Footer from "./Footer";
import HeroBanner from "./HeroBanner";
import { client } from "../lib/client";


const Layout = ({ children }) => {
  return (
    <div className="layout">
      <Head>
        <title>Zayn.k Formation</title>
      </Head>
      <header>
        <Navbar />
      </header>
      <main>
        {children}
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};


export default Layout;
