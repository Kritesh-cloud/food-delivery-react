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

  const [browseList1, setBrowseList1] = useState([]);
  const [browseList2, setBrowseList2] = useState([]);
  const [browseList3, setBrowseList3] = useState([]);
  const [browseList4, setBrowseList4] = useState([]);
  const [browseList5, setBrowseList5] = useState([]);
  const [browseList6, setBrowseList6] = useState([]);
  const [browseList7, setBrowseList7] = useState([]);
  const [browseList8, setBrowseList8] = useState([]);

  const [restaurantList, setRestaurantList] = useState([]);

  const getRestaurantList = () => {
    axios
      // .get(`http://localhost:8080/list-restaurant-details`)
      .get(`http://localhost:8080/list-short-restaurant-details`)
      .then((res) => {
        setRestaurantList(...restaurantList, res.data);
      })
      .catch((err) => {
        console.log("err", err);
      })
      .finally();
  };

  const getRestaurant = (browseId) => {
    axios
      .get(`http://localhost:8080/list-restaurant-details/` + browseId)
      .then((res) => {
        // console.log("browseId", browseId);
        if (browseId == 0) {
          setBrowseList1(...browseList1, res.data);
          setBrowseList(...browseList, browseList1);
        } else if (browseId == 1) {
          setBrowseList2(...browseList2, res.data);
          setBrowseList(...browseList, browseList2);
        } else if (browseId == 2) {
          setBrowseList3(...browseList3, res.data);
          setBrowseList(...browseList, browseList3);
        } else if (browseId == 3) {
          setBrowseList4(...browseList4, res.data);
          setBrowseList(...browseList, browseList4);
        }
      })
      .catch((err) => {
        console.log("err", err);
      })
      .finally(setBrowseListLoading(false));
  };

  useEffect(() => {
    getRestaurantList();
    getRestaurant(0);
    getRestaurant(1);
    getRestaurant(2);
    getRestaurant(3);
  }, []);

  return (
    <HomeRestaurantContext.Provider
      value={{
        browseList1,
        browseList2,
        browseList3,
        browseList4,
        browseList,
        restaurantList,
        browseListLoading,
      }}
    >
      {children}
    </HomeRestaurantContext.Provider>
  );
};
