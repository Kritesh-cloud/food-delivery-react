import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./components/home/Home";
import Cart from "./components/home/Cart";
import NoPage from "./components/nopage/NoPage";
import Dashboard from "./components/dashboard/Dashboard";

import AddCategory from "./components/dashboard/admin/AddCategory";
import ListCategory from "./components/dashboard/admin/ListCategory";
import ListRestaurant from "./components/dashboard/admin/ListRestaurant";
import RestaurantCard from "./components/dashboard/admin/RestaurantCard";
import UpdateBrowseContent from "./components/dashboard/admin/UpdateBrowseContent";
import ListBrowseContent from "./components/dashboard/admin/ListBrowseContent";
import AssignAuthority from "./components/dashboard/admin/AssignAuthority";
import Category from "./components/dashboard/admin/Category";
import LogOut from "./components/comp/LogOut";
import RestaurantDetail from "./components/home/RestaurantDetail";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* home */}
        <Route path="/" element={<Home />} />
        {/* dashboard */}
        <Route path="dashboard" element={<Dashboard />}>
          <Route path="category" element={<Category />} />
          <Route path="category/add" element={<AddCategory />} />
          <Route path="category/list" element={<ListCategory />} />
          <Route path="restaurant/list" element={<ListRestaurant />} />
          <Route path="restaurant/:id" element={<RestaurantCard />} />
          <Route path="browse-content/list" element={<ListBrowseContent />} />
          <Route path="browse-content/:id" element={<UpdateBrowseContent />} />
          <Route
            path="assign-authority/:authority"
            element={<AssignAuthority />}
          />
          
          <Route path="logout" element={<LogOut />} /> 
          {/* <Route path="user" element={<User />} />
          <Route path="log" element={<Log />} />
          <Route path="asign-authority/:authority" element={<AssignAuthority />} />
          <Route path="browse-content/list" element={<CreateBrowseContent />} />
          <Route path="restaurant" element={<ListRestaurant />} />
          <Route path="cart" element={<Cart />} />
          */}
        </Route>
        <Route path="restaurant-detail/:id" element={<RestaurantDetail />} />
        <Route path="cart" element={<Cart />} />
        {/* <Route path="cart" element={<Cart />} /> */}
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
