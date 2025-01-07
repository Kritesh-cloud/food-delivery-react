import { Button, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { getHomeRestaurant } from "../../context/HomeRestaurantContext";
import { useNavigate } from "react-router";

const Restaurant1 = ({ item, index,navi }) => {
  return (
    <div key={index} className="flexcol gap-3 bor w-[240px] cursor-pointer" onClick={()=>(navi(item.id))}>
      <div className="flex ">
        <img src={item.backgroundUrl} className="rounded" />
      </div>
      <div className="flex gap-3 bor pb-3">
        <div className="bor">
          <img src={item.iconUrl} className="w-10 bor" />
        </div>
        <div className="flexcol bor">
          <div>{item.name}</div>
          <div className="text-[12px] text-[#444]">{item.address}</div>
          {/* {item.id} */}
        </div>
      </div>
    </div>
  );
};

const Restaurant2 = ({ item, index }) => {
  return (
    <div key={index} className="flexcol gap-3 bor w-[290px]  cursor-pointer">
      <div className="flex ">
        <img
          src={item.backgroundUrl}
          className=""
          style={{ boxShadow: "0 0 6px #000" }}
        />
      </div>
      <div className="flex gap-3 bor">
        <div className="bor none">
          <img src={item.iconUrl} className="w-10 bor" />
        </div>
        <div className="flexcol bor">
          <div>{item.name}</div>
          <div className="text-[12px] text-[#444]">{item.address}</div>
        </div>
      </div>
      <div className="bor">
        <Button variant="outlined">Order Now</Button>
      </div>
    </div>
  );
};

const Restaurant3 = ({ item, index }) => {
  return (
    <div key={index} className="flexcol gap-3 bor w-[240px] cursor-pointer">
      <div className="flex ">
        <img src={item.backgroundUrl} className="rounded" />
      </div>
      <div className="flex gap-3 bor pb-3">
        <div className="bor">
          <img src={item.iconUrl} className="w-10 bor" />
        </div>
        <div className="flexcol bor">
          <div>{item.name}</div>
          <div className="text-[12px] text-[#444]">{item.address}</div>
        </div>
      </div>
    </div>
  );
};

const Restaurant4 = ({ item, index }) => {
  return (
    
    <div key={index} className="flexcol gap-3 bor w-[240px] cursor-pointer ">
      <div className="flex ">
        <img src={item.backgroundUrl} className="rounded" />
      </div>
      <div className="flex gap-3 bor pb-3">
        <div className="bor">
          <img src={item.iconUrl} className="w-10 bor" />
        </div>
        <div className="flexcol bor">
          <div>{item.name}</div>
          <div className="text-[12px] text-[#444]">{item.address}</div>
        </div>
      </div>
    </div>
    
  );
};

const Restaurants = ({ title, browseId }) => {
  let navigate = useNavigate();
  const {
    browseList1,
    browseList2,
    browseList3,
    browseList4,
    browseList,
    browseListLoading,
  } = getHomeRestaurant();

  const [showBrowseList, setShowBrowseList] = useState([]);

  const navigateRestaurant = (id) => {
    navigate("restaurant-detail/"+id)
  }
  useEffect(() => {
    if (browseId == 1) {
      setShowBrowseList(browseList1);
    } else if (browseId == 2) {
      setShowBrowseList(browseList2);
    } else if (browseId == 3) {
      setShowBrowseList(browseList3);
    } else if (browseId == 4) {
      setShowBrowseList(browseList4);
    }
  }, [browseList1, browseList2, browseList3, browseList4]);
  return (
    <div
      className={`${
        browseId == 3 ? "mx-0 px-24 py-10 bg-[#1a1a1a] text-white bor" : "mx-24"
      } flexcol  mt-20 bor`}
    >
      <Typography variant="h5" sx={{ fontWeight: 600 }}>
        {title}
      </Typography>
      <div className="hideScroll flex gap-10 overflow-auto bor">
        <div className={`${browseListLoading ? "" : "hidden"}`}>Loading...</div>
        <div
          className={`${
            browseListLoading ? "hidden" : ""
          } w100 flex  mt-5 bor overflow-auto hideScroll`}
        >
          <div
            className={`${browseId == 1 || browseId == 4 ? "gap-8" : ""} ${
              browseId == 2 ? "gap-3" : ""
            } ${browseId == 3 ? "gap-5" : ""} flex `}
          >
            {showBrowseList &&
              showBrowseList.map((item, index) => (
                <div key={index} className="flex">
                  {browseId == 1 ? (
                    <Restaurant1 item={item} index={index} navi={navigateRestaurant}/>
                  ) : (
                    ""
                  )}
                  {browseId == 2 ? (
                    <Restaurant2 item={item} index={index} navi={navigateRestaurant}/>
                  ) : (
                    ""
                  )}
                  {browseId == 3 ? (
                    <Restaurant3 item={item} index={index} navi={navigateRestaurant}/>
                  ) : (
                    ""
                  )}
                  {browseId == 4 ? (
                    <Restaurant4 item={item} index={index} navi={navigateRestaurant}/>
                  ) : (
                    ""
                  )}
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Restaurants;

/*


restaurant = [{id:1,"a"},{id:2,"b"},{id:3,"c"},{id:4,"d"},{id:5,"e"},{id:6,"f"},]

browse1 = [2,3,4]

browse2 = [54,5,6]


write filter code in js get the filtered list of  restaurant1 if its id is same as browse1 
and do it again for restaurant2 with browse2




*/
