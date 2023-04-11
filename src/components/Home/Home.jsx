import React from "react";
import Header from "../header/Header";
import { Outlet } from "react-router-dom";
import "./Home.css";
import Banner from "../banner/Banner";
import Categories from "../categories/Categories";

const Home = () => {
  return (
    <div>
    <Banner></Banner>
    <Categories></Categories>
    </div>
  );
};

export default Home;
