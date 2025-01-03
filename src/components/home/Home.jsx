import { Box } from "@mui/material";
import React, { useState } from "react";
import Navigation from "../navigation/Navigation";
import Footer from "../footer/Footer";
import MainCategory from "./MainCategory";
import Hero from "./Hero";
import Restaurants from "./Restaurants";
import { HomeRestaurantProvider } from "../../context/HomeRestaurantContext";
import AuthForm from "../authentication/AuthForm";
const Home = () => {
  const [showFrom, setShowForm] = useState(false);
  const [isSignUp, setIsSignUp] = useState(true);

  const toggelShowFrom = () => {
    setShowForm(!showFrom);
  };

  const toggelSignInUp = () => {
    setIsSignUp(!isSignUp);
  };
  useState(() => {
    console.log("showFrom", showFrom);
  }, [showFrom]);
  return (
    <div className="flexcol bor relative">
      <div className={`${showFrom ? "" : "hidden"} bor h-100 w100 fixed  z-10`}>
        <div className="flexmid hw100 bor relative">
          <div
            className="bg-black absolute opacity-70 hw100"
            onClick={() => toggelShowFrom()}
          ></div>
          <div className="flexmid absolute bor">
            <AuthForm
              isSignUp={isSignUp}
              toggelShowFrom={toggelShowFrom}
              toggelSignInUp={toggelSignInUp}
            />
          </div>
        </div>
      </div>
      {/* <div
        className={`${showFrom?"hidden":""} absolute bor hw100 bg-black z-10 opacity-70 position-fixed`}
        onClick={() => setShowForm(!showFrom)}
      >
      </div>
      <div className="flexmid borr absolute h50 w50 z-20 bg-white">
        form
      </div> */}
      <section className="borx p-6 mb-5 hidden">Section00</section>
      <section className="">
        <Navigation showFrom={showFrom} isSignUp={isSignUp} setShowForm={setShowForm} />
      </section>
      <section className="">
        <Hero />
      </section>
      <section className="">
        <MainCategory />
      </section>
      <section className="">
        <HomeRestaurantProvider>
          <Restaurants title="Best Eateries for Every Taste" browseId={1} />
        </HomeRestaurantProvider>
      </section>
      <section className="">
        <HomeRestaurantProvider>
          <Restaurants
            title="Must-Try Restaurants for Food Lovers"
            browseId={2}
          />
        </HomeRestaurantProvider>
      </section>
      <section className="">
        <HomeRestaurantProvider>
          <Restaurants
            title="Foodie's Guide to the Best Restaurants"
            browseId={3}
          />
        </HomeRestaurantProvider>
      </section>
      <section className="mb-20">
        <HomeRestaurantProvider>
          <Restaurants title="Best Eateries for Every Taste" browseId={1} />
        </HomeRestaurantProvider>
      </section>
      <section className="borx p-6 mb-5 none">offer</section>
      <section className="borx p-6 mb-5 none">list of restaurant</section>
      <section className="borx p-6 mb-5 none">list of food</section>
      <section className="borx p-6 mb-5 none">list of restaurant</section>
      <section className="borx p-6 mb-5 none">offers</section>
      <section className="borx p-6 mb-5 none">list of food</section>
      <section className="borx p-6 mb-5 none">list of restaurant</section>
      <section className="borx p-6 mb-5 none">list of restaurants</section>
      <section className="">
        <Footer />
      </section>
    </div>
  );
};

export default Home;
