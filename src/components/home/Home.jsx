import { Box } from "@mui/material";
import React from "react";
import Navigation from "../navigation/Navigation";
import Footer from "../footer/Footer";
import MainCategory from "./MainCategory";
import Hero from "./Hero";
import Restaurants from "./Restaurants";
import { HomeRestaurantProvider } from "../../context/HomeRestaurantContext";

const Home = () => {
  return (
    <div className="flexcol borx">
      <section className="borx p-6 mb-5 hidden">Section00</section>
      <section className="">
        <Navigation />
      </section>
      <section className="">
        <Hero />
      </section>
      <section className="">
        <MainCategory />
      </section>
      <section className="">
        <HomeRestaurantProvider>
          <Restaurants />
        </HomeRestaurantProvider>
      </section>
      <section className="borx p-6 mb-5">offer</section>
      <section className="borx p-6 mb-5">list of restaurant</section>
      <section className="borx p-6 mb-5">list of food</section>
      <section className="borx p-6 mb-5">list of restaurant</section>
      <section className="borx p-6 mb-5">offers</section>
      <section className="borx p-6 mb-5">list of food</section>
      <section className="borx p-6 mb-5">list of restaurant</section>
      <section className="borx p-6 mb-5">list of restaurants</section>
      <section className="">
        <Footer />
      </section>
    </div>
  );
};

export default Home;
