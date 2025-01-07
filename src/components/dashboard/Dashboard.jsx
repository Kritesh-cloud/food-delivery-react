import React from "react";
import Sidebar2 from "./Sidebar2";
import { Outlet } from "react-router-dom";

const Dashboard = () => {
  return (
    <div className="flex h-100 bor">
      <div className=" bor">
        <Sidebar2 role="admin"/>
      </div>
      <div className="flex-1 bor">
        <Outlet />
      </div>
    </div>
  );
};

export default Dashboard;
