import { Button, Typography } from "@mui/material";
import React from "react";
// import './footer.css';
import { navigation } from "../../constant";
const Footer = () => {
  return (
    <footer className="flexcol  pt-10  bg-[#1a1a1a] text-[#ccc] bor">
      <div className="flex px-24 pb-10 gap-28 bor ">
        <div className="flexcol gap-1 flex-1 ">
          <div className="text-[18px]">About Us</div>
          <div className="text-[15px]">
            We deliver delicious food to your doorstep. Quality and freshness
            guaranteed!
          </div>
        </div>

        <div className="flexcol gap-1 flex-1 ">
          <div className="text-[18px]">Quick Links</div>
          {navigation.map((item) => (
            <div className="flex" key={item.title}>
              <div className="bor text-[15px] hover:underline cursor-pointer">
                {item.title}
              </div>
            </div>
          ))}
        </div>

        <div className="flexcol gap-1 flex-1  text-[15px]">
          <h3 className="text-[18px]">Contact Us</h3>
          <p>Email: support@fooddelivery.com</p>
          <p>Phone: +123-456-7890</p>
          <p>Address: 123 Food Street, City</p>
        </div>
      </div>

      <div className="flex justify-center bg-black text-white py-4 ">
        <p>&copy; 2024 Food Delivery App. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
