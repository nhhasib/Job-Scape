import React from "react";
import Header from "../header/Header";
import { Outlet } from "react-router-dom";
import "./Home.css";
import Banner from "../banner/Banner";

const Home = () => {
  return (
    <div>
    <Banner></Banner>
    </div>
  );
};

export default Home;
