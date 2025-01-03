import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./components/home/Home";
import NoPage from "./components/nopage/NoPage";
import Dashboard from "./components/dashboard/Dashboard";


const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* home */}
        <Route path="/" element={<Home />} />
        {/* dashboard */}
        <Route path="dashboard" element={<Dashboard />}>
          {/* <Route path="user" element={<User />} />
          <Route path="log" element={<Log />} />
          <Route path="analysis" element={<Analysis />} />
          <Route path="restaurant" element={<Restaurant />} />
          <Route path="notification" element={<Notification />} />
          <Route path="report" element={<Report />} /> */}
        </Route>
        {/* landing */}
        
        {/* restaurant create */}
        {/* <Route path="restaurant/create" element={<RestaurantCreate />} /> */}
        {/* Restaurant */}
        {/*
          <Route path="restaurant-owner" element={<RestaurantOwner />}>
            
            <Route path="view" element={<RestaurantView />} />
            <Route path="update" element={<RestaurantUpdate />} />
            
            <Route path="menu/add" element={<MenuAdd />} />
            <Route path="menu/list" element={<MenuList />} />
            <Route path="menu/update/:idd" element={<MenuUpdate />} />
            
            <Route path="orders" element={<OrderList />} />
            
            <Route path="offer/create" element={<OfferCreate />} />
            <Route path="offer/list" element={<OfferList />} />
            
            <Route path="reports" element={<SendReport />} />
          </Route>
          */}
        {/* no page */}
        <Route path="*" element={<NoPage />} />
        {/* <Route path="/" element={<InnerApp />}>
          </Route> */}
      </Routes>
    </BrowserRouter>
  );
};

export default App;
