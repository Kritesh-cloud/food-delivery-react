import { Box, Button } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { navigation, navigationRightLink, colors } from "../../constant";
import logo from "../../assets/logo/logo.png";

const Navigation = ({ showFrom, isSignUp, setShowForm }) => {
  const navigate = useNavigate();
  const [userLogedIn, setUserLogedIn] = useState(false);

  const logOut = () => {
    localStorage.removeItem("loginToken");
    navigate("/");
  };

  useEffect(() => {
    console.log("userLogedIn", userLogedIn);
    if (localStorage.getItem("loginToken") != null) {
      console.log(JSON.parse(userLogedIn));
      setUserLogedIn(true);
    }
  }, [showFrom, isSignUp]);

  // useEffect(()=>{

  // },[userLogedIn])

  return (
    <div className="flex jcsb mx-24 my-5 bor">
      <div className="flex flex-7 bor">
        <img src={logo} className="h-10 bor" />
      </div>
      <div className="flex-9">
        {navigation.map((item) => (
          <Button
            key={item.title}
            sx={{ color: colors.first.color }}
            onClick={() => navigate(item.link)}
            className="bor"
          >
            {item.title}
          </Button>
        ))}
      </div>
      <div className="flex-7 flex jcfe bor">
        <Button sx={{ color: "#4a4a4a" }}>
          {navigationRightLink.search.icon}
        </Button>

        {userLogedIn ? (
          <>
            <Button sx={{ color: "#4a4a4a", position: "relative" }}>
              {navigationRightLink.basket.icon}
              <span className="flexmid top-5 right-3 absolute bg-white borx3 h-4 w-4 rounded-full">
                0
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
        {/* {navigationRightLink.map((item) => (
          <Button
            key={item.title}
            sx={{ color: "#4a4a4a", position: "relative" }}
            onClick={() =>
              item.title == "Sign In"
                ? setShowFrom(!showFrom)
                : navigate(item.link)
            }
          >
            {item.isIcon ? item.icon : item.title}
            {item.title == "Shopping Basket" ? (
              <span className="flexmid top-5 right-3 absolute bg-white borx3 h-4 w-4 rounded-full">
                0
              </span>
            ) : (
              ""
            )}
          </Button>
        ))} */}
      </div>
    </div>
  );
};

export default Navigation;
