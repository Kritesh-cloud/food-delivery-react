import { Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import axios from "axios";
import TableWithPagination from "../../comp/TableWithPagination";

const ListCategory = () => {
  const [dataList, setDataList] = useState([]);
const [loading, setLoading] = useState(true);
  const [columns, setColumns] = useState([
      // { label: "Id", key: "id" },
      { label: "SN", key: "sn" },
      { label: "Name", key: "name" },
      { label: "Image", key: "image" },
      // { label: "Owner", key: "owner.name" },
      // { label: "Detail", key: "detail" },
    ]);
  
  const getMainCategoryList = () => {
    axios
      .get("http://localhost:8080/user/browse/list-main-category")
      .then((res) => {
        const updatedData = res.data.map((item,index) => ({
          ...item,
          sn: index+1,
          detail: "Detail",
          
          link: "/dashboard/category",
        }));
        setDataList(updatedData);

        
        console.log("ress", res.data);
        setLoading(false)
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
    <div className="flexcol p-5 bor h100 overflow-auto">
      <TableWithPagination
        title="Restaurant List"
        data={dataList}
        columns={columns}
        loading={loading}
      />
      
    </div>
  );
};

export default ListCategory;
