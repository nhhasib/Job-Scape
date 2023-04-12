import React from "react";
import Header from "../header/Header";
import { Outlet, useLoaderData } from "react-router-dom";
import "./Home.css";
import Banner from "../banner/Banner";
import Categories from "../categories/Categories";
import FeaturedJobs from "../featuredjobs/FeaturedJobs";

const Home = () => {
    const data=useLoaderData()
  return (
    <div>
    <Banner></Banner>
    <Categories></Categories>
    <FeaturedJobs data={data}></FeaturedJobs>
    </div>
  );
};

export default Home;
