import { Typography } from "@mui/material";
import React from "react";
import { getHomeRestaurant } from "../../context/HomeRestaurantContext";

const Restaurants = () => {
  // const homeRestaurantList = getHomeRestaurant();
  const {browseList, filteredrestaurantList, restaurantLoading } = getHomeRestaurant();

  // console.log("restaurantLoading", restaurantLoading);
  // console.log("filteredrestaurantList",filteredrestaurantList);
  return (
    <div className="flexcol mx-24 mt-20">
      <Typography variant="h4" sx={{ color: "#000", fontWeight: 600 }}>
        Best Eateries for Every Taste
      </Typography>
      <div className="hideScroll flex gap-10 overflow-auto borx">
        <div className={`${restaurantLoading ? "" : "hidden"}`}>Loading...</div>
        <div
          className={`${
            restaurantLoading ? "hidden" : ""
          } w100 flex gap-5 jcsb mt-5 borr`}
        >
          {filteredrestaurantList.map((item, index) => (
            <div key={index} className="borx">
              {item.id}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Restaurants;

/*


restaurant = [{id:1,"a"},{id:2,"b"},{id:3,"c"},{id:4,"d"},{id:5,"e"},{id:6,"f"},]

browse1 = [2,3,4]

browse2 = [54,5,6]


write filter code in js get the filtered list of  restaurant1 if its id is same as browse1 
and do it again for restaurant2 with browse2




*/
