import { Box, Button } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  dashboardAuthority,
  navigation,
  navigationRightLink,
  colors,
} from "../../constant";
import logo from "../../assets/logo/logo.png";
import axios from "axios";

const Navigation = ({ cartRefresh, showFrom, isSignUp, setShowForm }) => {
  const navigate = useNavigate();
  const [userToken, setUserToken] = useState("");
  const [userLogedIn, setUserLogedIn] = useState(false);
  const [userRoles, setUserRoles] = useState([]);
  const [dashboardActive, setDashboardActive] = useState(false);
  const [itemLength, setItemLength] = useState(0);
  const [refresh, setRefresh] = useState(true);

  const data = {
    headers: {
      Authorization: userToken,
    },
  };
  const logOut = () => {
    localStorage.removeItem("loginToken");
    navigate("/");
    window.location.reload();
    
  };

  const toggleRefresh = () => {
    setRefresh(!refresh);
  };

  const decodeToken = (token) => {
    if (typeof token !== "string") {
      console.error("Invalid Token: Token must be a string");
      return null;
    }

    try {
      // Split the token into parts
      const base64Url = token.split(".")[1];
      const base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/");
      const jsonPayload = decodeURIComponent(
        window
          .atob(base64)
          .split("")
          .map((c) => "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2))
          .join("")
      );

      const roless = JSON.parse(jsonPayload).roles;
      setDashboardActive(roless.length > 1);

      return JSON.parse(jsonPayload);
    } catch (error) {
      console.error("Invalid Token", error);
      return null;
    }
  };

  const getUserCart = () => {
    console.log("header", data);
    const path = `http://localhost:8080/user/order/get-user-basket`;
    axios
      .get(path, data, data)
      .then((res) => {
        console.log(res.data);
        console.log(res.data.menuItemResponses.length);
        setItemLength(res.data.menuItemResponses.length);
      })
      .catch((err) => {
        console.log("err", err);
      });
  };

  const setToken = () => {
    const loginToken = localStorage.getItem("loginToken");
    if (loginToken) {
      setUserToken(`Bearer ${JSON.parse(loginToken)}`);
      decodeToken(JSON.parse(loginToken));
      toggleRefresh();
    }
  };

  useEffect(() => {
    setToken();
  }, []);

  useEffect(() => {
    if (localStorage.getItem("loginToken") != null) {
      setUserLogedIn(true);
    } else {
      setUserLogedIn(false);
      setUserRoles([]);
    }
    setToken();
  }, [showFrom, isSignUp]);

  useEffect(() => {
    getUserCart();
  }, [refresh,cartRefresh]);

  return (
    <div className="flex jcsb mx-24 my-5 bor">
      <div className="flex flex-7 bor">
        <img src={logo} className="h-10 bor" />
      </div>
      <div className="flex flex-9">
        {navigation.map((item, index) => (
          <div key={item.title + index} className="flex">
            <Button
              sx={{ color: colors.first.color }}
              onClick={() => navigate(item.link)}
              style={item.loggedIn ? { display: "none" } : {}}
            >
              {item.title}
            </Button>
            {item.loggedIn ? (
              <Button
                sx={{ color: colors.first.color }}
                onClick={() => navigate(item.link)}
                style={!dashboardActive ? { display: "none" } : {}}
              >
                {item.title}
              </Button>
            ) : (
              ""
            )}
          </div>
        ))}
      </div>
      <div className="flex-7 flex jcfe bor">
        <Button sx={{ color: "#4a4a4a" }}>
          {navigationRightLink.search.icon}
        </Button>

        {userLogedIn ? (
          <>
            <Button
              sx={{ color: "#4a4a4a", position: "relative" }}
              onClick={() => navigate("/cart")}
            >
              {navigationRightLink.basket.icon}
              <span className="flexmid top-5 right-3 absolute bg-white borx3 h-4 w-4 rounded-full">
                {itemLength}
              </span>
            </Button>
            <Button sx={{ color: "#4a4a4a" }} onClick={() => logOut()}>
              Log Out
            </Button>
          </>
        ) : (
          <Button
            sx={{ color: "#4a4a4a" }}
            onClick={() => setShowForm(!showFrom)}
          >
            Sign In
          </Button>
        )}
      </div>
    </div>
  );
};

export default Navigation;
