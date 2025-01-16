import React from "react";
import { homeFoodCategory } from "../../constant";

import { useEffect, useState } from "react";
import axios from "axios";
const MainCategory = () => {
  const [dataList, setDataList] = useState([]);
  const [loading, setLoading] = useState(true);

  const getMainCategoryList = () => {
    axios
      .get("http://localhost:8080/user/browse/list-main-category")
      .then((res) => {
        const updatedData = res.data.map((item, index) => ({
          ...item,
          sn: index + 1,
          detail: "Detail",

          link: "/dashboard/category",
        }));
        setDataList(updatedData);

        // console.log("ress", res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log("err in auth", err);
      })
      .finally();
  };

  useEffect(() => {
    getMainCategoryList();
  }, []);

  return (
    <div className="hideScroll flex gap-8 mx-24 mt-20 bor overflow-auto">
      {loading ? (
        <div>Loading...</div>
      ) : (
        dataList &&
        dataList.length > 0 &&
        dataList.map((item,index) => (
          <div key={item.name+index} className="flexcol gap-2 aic bor">
            <div className="w-28 flex jcc bor">
              <div className="flexmid w-16 h-16 p-1 rounded-full border border-slate-700 bg-slate-300">
                <div className="border border-slate-700 bor rounded-full overflow-hidden">
                  <img src={item.imageUrl} className="w100" />
                </div>
              </div>
            </div>
            <div className="text-sm text-[#4a4a4a]">{item.name}</div>
          </div>
        ))
      )}
    </div>
  );
};

export default MainCategory;
