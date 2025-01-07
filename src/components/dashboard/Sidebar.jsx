import React, { useEffect, useState } from "react";
import Collapse from "@mui/material/Collapse";
import { colors, sideBarData } from "../../constant/index";
import { Box, Typography } from "@mui/material";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { useNavigate } from 'react-router-dom';


const SubSideBar = ({ item, handelNavigation }) => {
  // console.log(item);

  return (
    <Box className="bor bor cursor-pointer">
      <Typography
        className="flex py-2 px-5 hover:bg-[#888]"
        onClick={() => handelNavigation(item)}
      >
        {item.title}
        <div className={`${item.subList.length > 0 ? "" : "hidden"}`}>
          {item.open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
        </div>
      </Typography>
      {item.subList.length > 0 ? (
        <>
          <Collapse in={item.open} timeout="auto" unmountOnExit>
            {item.subList.map((subItem, index) => (
              <Typography
                key={index}
                className="pl-10 py-2 hover:bg-[#888]"
                onClick={() => handelNavigation(subItem)}
              >
                {subItem.title}
              </Typography>
            ))}
          </Collapse>
        </>
      ) : (
        <div></div>
      )}
    </Box>
  );
};

const Sidebar = () => {
  const [userAuthority, setUserAuthority] = useState("admin");

  const [data, setData] = useState([]);
  const navigate = useNavigate();

  const handelListOpen = (selectedItem) => {
    
    const newData = data.map((item) => {
      if (item == selectedItem) {
        item.open = !item.open;
      }
      return item;
    });
    console.log("newData", newData);
    setData(newData);
  };

  const handelNavigation = (selectedItem) => {
    if (selectedItem.mainItem && selectedItem.subList.length > 0) {
      handelListOpen(selectedItem);
    } else if (selectedItem.mainItem && selectedItem.subList.length == 0) {

      console.log("click link 1", );
      navigate('/dashboard'+selectedItem.link)
    } else if (!selectedItem.mainItem) {
      console.log("click link 2", selectedItem.link);
      navigate('/dashboard'+selectedItem.link)
    }
  };

  useEffect(() => setData(sideBarData), []);

  return (
    <Box className="py-5 h100" sx={{ background: "#ddd" }}>
      <Typography
        variant="h5"
        className="text-[20px] font-semibold px-5 pb-4"
        sx={{ fontWeight: 600 }}
      >
        Dashboard
      </Typography>
      <div className="bor">
        {data.map((item, index) => (
          <div key={index}>
            {
              // true
            item.for.includes(userAuthority) 
            ? (
              <div key={item.title + index}>
                <SubSideBar
                  item={item}
                  handelListOpen={handelListOpen}
                  handelNavigation={handelNavigation}
                />
              </div>
            ) : (
              <div></div>
            )}
          </div>
        ))}
      </div>
    </Box>
  );
};

export default Sidebar;

