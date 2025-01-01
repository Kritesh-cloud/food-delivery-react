import React from "react";
import hero from "../../assets/images/hero.png";
import { Button, Typography } from "@mui/material";
import { colors } from "../../constant";
const Hero = () => {
  return (
    <div className="mx-24 mt-5 relative bor">
      <div className="absolute">
        <img src={hero} />
      </div>
      <div className="absolute hw100 bg-[#1a1a1a] bg-opacity-20"></div>
      <div style={{ opacity: 0 }} className="">
        <img src={hero} />
      </div>
      <div className="absolute top-0 bor w100 h100 p-24 ">
        <Typography variant="h2" sx={{ color: "#fff", fontWeight: 500 }}>
          Order your
        </Typography>
        <Typography variant="h2" sx={{ color: "#fff", fontWeight: 500 }}>
          Favourite Food Here
        </Typography>
        <Typography sx={{ color: "#fff", mr: 40 }}>
          Choose from a diverse menu featuring a delectable array of dishes
          crafted with the finest ingredients and culinary expertise. Our
          mission is to satisfy your cravings and elevate your dining
          experience, one delicious meal at a time.
        </Typography>
        <Button
          variant="contained"
          sx={{
            color: colors.second.color,
            background: colors.second.background,
            mt: 4,
          }}
        >
          View Menu
        </Button>
      </div>
    </div>
  );
};

export default Hero;
