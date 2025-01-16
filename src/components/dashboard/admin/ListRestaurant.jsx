import React, { useEffect, useState } from "react";
import ComponentList from "../../comp/ComponentList";
import TableWithPagination from "../../comp/TableWithPagination";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const RestList = ({ dataList, pageNumber }) => {
  //http://localhost:8080/list-restaurant-details
  const naviate = useNavigate();
  const itemsPerPage = 10;  
  return (
    <table
      className={`${dataList.length > 0 ? "" : "hidden"} w100 bor bg-[#B6B6B6]`}
    >
      <tr className=" bor w100">
        <th className="p-2">Id</th>
        <th className="p-2 text-left">Name</th>
        <th className="p-2 text-left">Address</th>
        <th className="p-2 text-left">Email</th>
        {/* <th className="p-2 text-left">Contact</th> */}
        <th className="p-2 text-left">Owner</th>
        <th className="p-2 text-left">Details</th>
      </tr>
      {dataList.length > 0 &&
        dataList
          .slice((pageNumber - 1) * itemsPerPage, pageNumber * itemsPerPage)
          .map((data, index) => (
            <tr
              className={`${
                index % 2 == 0 ? "bg-[#C0C0C0]" : "bg-[#B6B6B6]"
              } bor w100 bor`}
            >
              <td className="p-2">{index + 1}</td>
              <td className="p-2 ">{data.name}</td>
              <td className="p-2">{data.address}</td>
              <td className="p-2">{data.email}</td>
              {/* <td className="p-2">{data.contactNumber}</td> */}
              <td className="p-2">{data.owner.name}</td>
              <td className="p-2 cursor-pointer" onClick={()=>(naviate(`/dashboard/restaurant/${data.id}`))}>Detail</td>
            </tr>
          ))}
    </table>
  );
};

const ListRestaurant = () => {
  const [dataList, setDataList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [columns, setColumns] = useState([
      // { label: "Id", key: "id" },
      { label: "SN", key: "sn" },
      { label: "Name", key: "name" },
      { label: "Email", key: "email" },
      // { label: "Owner", key: "owner.name" },
      { label: "Detail", key: "detail" },
    ]);

  const getRestaurantList = () => {
    axios
      // .get(`http://localhost:8080/list-restaurant-details`)
      .get(`http://localhost:8080/list-short-restaurant-details`)
      .then((res) => {
        const updatedData = res.data.map((item,index) => ({
          ...item,
          sn: index+1,
          detail: "Detail",
          link: "/dashboard/restaurant",
        }));
        setDataList(updatedData);
        // setDataList(...dataList, res.data);
        setLoading(false)
        console.log("res.data short", res.data);
      })
      .catch((err) => {
        console.log("err", err);
      })
      .finally();
  };

  useEffect(() => {
    getRestaurantList();
  }, []);

  return (
    <div className="flexcol h100">
      <TableWithPagination
        title="Restaurant List"
        data={dataList}
        columns={columns}
        loading={loading}
      />
      {/* <ComponentList
        pageTitle="Restaurant List"
        size={Math.ceil(dataList.length / 10)}
        ListComponent={RestList}
        dataList={dataList}
      /> */}
    </div>
  );
};

export default ListRestaurant;

/*

            <tr>
              <td>{index + 1}</td>
              <td>{data.name}</td>
              <td>{data.address}</td>
              <td>{data.email}</td>
              <td>{data.contact}</td>
              <td>{data.owner.name}</td>
              <td>Detail</td>
            </tr>

*/
