import React, { useContext, useEffect, useState } from "react";

import axios from "axios";

const HomeRestaurantContext = React.createContext();
const HomeRestaurantContextUpdate = React.createContext();

export const getHomeRestaurant = () => {
  return useContext(HomeRestaurantContext);
};

export const setHomeRestaurant = () => {
  return useContext(HomeRestaurantContextUpdate);
};

export const HomeRestaurantProvider = ({ children }) => {
  const [browseList, setBrowseList] = useState([]);
  const [browseListLoading, setBrowseListLoading] = useState(true);
  const [browseListError, setBrowseListError] = useState("");

  const [restaurantList, setRestaurantList] = useState([]);
  const [restaurantListLoading, setRestaurantListLoading] = useState(true);
  const [restaurantListError, setRestaurantListError] = useState("");

  const [filteredrestaurantList, setFilteredrestaurantList] = useState([]);
  const [restaurantLoading, setRestauranLoading] = useState(true);

  const getBrowseList = () => {
    axios
      .get(`http://localhost:8080/user/browse/list-browse-content`)
      .then((res) => {
        setBrowseList(res.data);
      })
      .catch((err) => {
        setBrowseListError("API server error");
        console.log("err", err);
      })
      .finally(setBrowseListLoading(false));
  };
  const getRestaurant = () => {
    axios
      .get(`http://localhost:8080/list-restaurant-details`)
      .then((res) => {
        setRestaurantList(res.data);
      })
      .catch((err) => {
        setRestaurantListError("API server error");
        console.log("err", err);
      })
      .finally(setRestaurantListLoading(false));
  };

  const filterRestuarntList = () => {
    // console.log("browseList", browseList);

    if (!browseListLoading && !restaurantListLoading) {
      setRestauranLoading(false);
      
      browseList.forEach((brlist, index) => {
        
        const newRestaurantList = {
          id: index + 1,
          name: brlist.name,
          list: restaurantList.filter((item) => brlist.ids.includes(item.id)),
        };
        console.log("==========================================================");
        console.log("index",index);
        console.log("brlist",brlist.ids);
        console.log("restaurantList",restaurantList);
        console.log("newRestaurantList",newRestaurantList);

        setFilteredrestaurantList([...filteredrestaurantList,newRestaurantList,])
        // setFilteredrestaurantList((oldRestaurantList) => [
        //   ...oldRestaurantList,
        //   newRestaurantList,
        // ]);
      });
      console.log("---------------------------------");
      console.log("filteredrestaurantList.len",filteredrestaurantList.length);
      console.log(filteredrestaurantList);
    }
  };
  useEffect(() => {
    setFilteredrestaurantList([]);
    getBrowseList();
    getRestaurant();
  }, []);

  useEffect(() => {
    filterRestuarntList();
  }, [browseList, restaurantList]);

  return (
    <HomeRestaurantContext.Provider
      value={{browseList, filteredrestaurantList, restaurantLoading }}
    >
      {/* <HomeRestaurantContextUpdate.Provider> */}
      {children}
      {/* </HomeRestaurantContextUpdate.Provider> */}
    </HomeRestaurantContext.Provider>
  );
};
