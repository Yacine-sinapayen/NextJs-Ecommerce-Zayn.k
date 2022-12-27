import React from "react";
import Head from "next/head";
import Navbar from "./Navbar";

const Layout = ({ children }) => {
  return (
    <>
      <Head>
        <title>Zayn.k Formation</title>
      </Head>

      <header>
        <Navbar />
      </header>

      <main style={{ background:'red'}}>
        {children}
      </main>
    </>
  );
};


export default Layout;
