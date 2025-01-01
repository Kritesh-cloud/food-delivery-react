import { Box, Button } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import { navigation, navigationRightLink, colors } from "../../constant";

const Navigation = () => {
  const navigate = useNavigate();

  return (
    <div className="flex jcsb mx-24 my-5 bor">
      <div className="flex flex-7 bor">
        <img
          src="https://fastly.picsum.photos/id/24/4855/1803.jpg?hmac=ICVhP1pUXDLXaTkgwDJinSUS59UWalMxf4SOIWb9Ui4"
          className="h-10 bor"
        />
      </div>
      <div className="flex-9">
        {navigation.map((item) => (
          <Button
            key={item.title}
            sx={{color:colors.first.color}}
            onClick={() => navigate(item.link)}
            className="bor"
          >
            {item.title}
          </Button>
        ))}
      </div>
      <div className="flex-7 flex jcfe bor">
        {navigationRightLink.map((item) => (
          <Button
            key={item.title}
            sx={{ color: "#4a4a4a", position: "relative"}}
            onClick={() => navigate(item.link)}
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
        ))}
      </div>
    </div>
  );
};

export default Navigation;
