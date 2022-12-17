import React from "react";
import Head from "next/head";
import Navbar from "./Navbar";

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
    </div>
  );
};


export default Layout;
