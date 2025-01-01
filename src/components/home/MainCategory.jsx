import React from "react";
import { homeFoodCategory } from "../../constant";

// import { useEffect, useState } from "react";
// import axios from "axios";
const MainCategory = () => {
  return (
    <div className="hideScroll flex gap-10 mx-24 mt-20 bor overflow-auto">
      {homeFoodCategory.map((item) => (
        <div key={item.name} className="flexcol gap-2 aic bor bor">
          <div className="w-28 flex jcc bor">
            <div className="flexmid w-16 h-16 rounded-full overflow-hidden " style={{boxShadow:"0 0 5px #000"}}>
              <img src={item.image} className="w100" />
            </div>
          </div>
          <div className="text-sm text-[#4a4a4a]">{item.name}</div>
        </div>
      ))}
    </div>
  );
};

export default MainCategory;
