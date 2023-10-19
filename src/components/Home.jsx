import React, { useState } from "react";
import ProductCard from "./ProductCard";
import "./Home.css"

const Home = () => {
  return (
    <section className="home_section py-5">
      <div className="container">
        <ProductCard></ProductCard>
      </div>
    </section>
  );
};

export default Home;
