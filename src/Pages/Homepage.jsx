import React from "react";
import Collection from "../Collection";
import Footer from "../Footer";
import Navbar from "../Navbar";
import NewsBanner from "../NewsBanner";
import { useState, useEffect } from "react";
import axios from "axios";

const Homepage = () => {
  const [newArrival, setNewArrival] = useState([]);
  const [trendingSaree, setTrendingSaree] = useState([]);
  const [sale, setSale] = useState([]);
  const [featuredProduct, setFeaturedproduct] = useState([]);

  useEffect(() => {
    const getProductList = async () => {
      const { data: newArrivalList } = await axios.get(
        "http://localhost:3000/products/newarrival"
      );
      const { data: trendingSareeList } = await axios.get(
        "http://localhost:3000/products/trendingsaree"
      );
      const { data: saleList } = await axios.get(
        "http://localhost:3000/products/sale"
      );
      const { data: featuredProduct } = await axios.get(
        "http://localhost:3000/products/featuredproduct"
      );
      setNewArrival(newArrivalList);
      setTrendingSaree(trendingSareeList);
      setSale(saleList);
      setFeaturedproduct(featuredProduct);
    };
    getProductList();
  }, []);

  return (
    <div>
      <NewsBanner />
      <Collection title="New Arrival" list={newArrival} />
      <Collection title="Featured Product" list={featuredProduct} />
      <Collection title="Sale" list={sale} />
      <Collection title="Trending Sarees" list={trendingSaree} />
    </div>
  );
};

export default Homepage;
