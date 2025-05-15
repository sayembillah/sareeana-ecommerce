import React from "react";
import Collection from "../Collection";
import Footer from "../Footer";
import Navbar from "../Navbar";
import NewsBanner from "../NewsBanner";

const Homepage = () => {
  return (
    <div>
      <NewsBanner />
      <Collection title="New Arrival" />
      <Collection title="Featured Product" />
      <Collection title="Sale" />
      <Collection title="Trending Sarees" />
    </div>
  );
};

export default Homepage;
