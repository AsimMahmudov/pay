import React from "react";
import scss from "../layout/Layout.module.scss";
import Header from "./header/Header";
import Footer from "./footer/Footer";
import Hero from "../hero/Hero";

const Layout = () => {
  return (
    <div className={scss.layout}>
      <Header />
      <main>
        <Hero />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
