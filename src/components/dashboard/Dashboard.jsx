import React, { useEffect, useState } from "react";
import Sidebar2 from "./Sidebar2";
import { Outlet, useNavigate } from "react-router-dom";

const Dashboard = () => {
  const navigate = useNavigate();

  const [userToken, setUserToken] = useState(null);
  const [userRoles, setUserRoles] = useState([]);
  const dashboardAuthority = [
    "owner",
    "staff",
    "delivery",
    "admin",
    "moderator",
  ];

  const setToken = () => {
    const loginToken = localStorage.getItem("loginToken");
    if (loginToken) {
      const bearerToken = `Bearer ${JSON.parse(loginToken)}`;
      setUserToken(bearerToken);
    }
    else{
      setUserToken([]);
    }
  };

  const decodeToken = (token) => {
    
    if (typeof token !== "string") {
      return null;
    }
    try {
      const base64Url = token.split(".")[1];
      const base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/");
      const jsonPayload = decodeURIComponent(
        window
          .atob(base64)
          .split("")
          .map((c) => "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2))
          .join("")
      );

      const userRoless = JSON.parse(jsonPayload).roles;
      console.log(userRoless);
      if(userRoless.length > 1){
        console.log("yes");
      }
      else{
        navigate("/");
        console.log("no");
      }
      setUserRoles(userRoless);

      return JSON.parse(jsonPayload);
    } catch (error) {
      console.error("Invalid Token", error);
      return null;
    }
  };

  const checkUserRoles = () => {
    
    const hasAuthority = dashboardAuthority.some((role) =>
      userRoles.includes(role)
    );

    if (!hasAuthority) {
      navigate("/");
    }
  };

  useEffect(() => {
    setToken();
  }, []);

  useEffect(() => {
    decodeToken(userToken);
    // checkUserRoles();
  }, [userToken]);
  return (
    <div className="flex h-100 bor">
      <div className=" bor">
        <Sidebar2 role={"admin"} />
      </div>
      <div className="flex-1 bor">
        <Outlet />
      </div>
    </div>
  );
};

export default Dashboard;
