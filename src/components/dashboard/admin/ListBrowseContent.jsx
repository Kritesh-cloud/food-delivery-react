import React, { useEffect, useState } from "react";
import TableWithPagination from "../../comp/TableWithPagination";
import axios from "axios";

const ListBrowseContent = () => {
  const [userToken, setUserToken] = useState("");
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const [columns, setColumns] = useState([
    { label: "Id", key: "id" },
    { label: "Title", key: "title" },
    { label: "Restaurant Count", key: "count" },
    { label: "Detail", key: "detail" },
  ]);

  const getBrowseContentList = () => {
    console.log("userToken", userToken);

    axios
      .get("http://localhost:8080/moderator/list-restaurant-browse-content", {
        headers: {
          Authorization: userToken,
        },
      })
      .then((res) => {
        const updatedData = res.data.map((item) => ({
          ...item,
          detail: "Detail",
          count: item.ids.length,
          link: "/dashboard/browse-content",
        }));

        setData(updatedData);
        setLoading(false);
        console.log("res", res.data);
      })
      .catch((err) => {
        console.log("errx" + err);
      });
  };

  useEffect(() => {
    const loginToken = localStorage.getItem("loginToken");
    if (loginToken) {
      setUserToken(`Bearer ${JSON.parse(localStorage.getItem("loginToken"))}`);
    }
  }, []);

  useEffect(() => {
    getBrowseContentList();
  }, [userToken]);

  return (
    <div className="bor h100">
      <TableWithPagination
        title="Browse Content List"
        data={data}
        columns={columns}
        loading={loading}
      />
    </div>
  );
};

export default ListBrowseContent;

/*

const data = [
{id: 1, contentOrder: null, title: 'Restaurant List One', type: 'restaurant', ids: Array(5)}
{id: 2, contentOrder: null, title: 'Restaurant List Two', type: 'restaurant', ids: Array(5)} 
{id: 3, contentOrder: null, title: 'Restaurant List Three', type: 'restaurant', ids: Array(5)}
]

write js code to add artibute link:"/dashboard/browse-content" to data

*/
