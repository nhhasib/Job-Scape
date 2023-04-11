import React from "react";
import Header from "../header/Header";
import { Outlet } from "react-router-dom";
import "./Home.css";
import Banner from "../banner/Banner";
import Categories from "../categories/Categories";
import FeaturedJobs from "../featuredjobs/FeaturedJobs";

const Home = () => {
  return (
    <div>
    <Banner></Banner>
    <Categories></Categories>
    <FeaturedJobs></FeaturedJobs>
    </div>
  );
};

export default Home;
