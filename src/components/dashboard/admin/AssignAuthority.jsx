import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import ComponentList from "../../comp/ComponentList";
import TableWithPagination from "../../comp/TableWithPagination";

const UserDetail = ({ dataList, pageNumber }) => {
  const itemsPerPage = 10;
  console.log("dataListdataList", dataList);
  return (
    <div>
      {dataList.length > 0 &&
        dataList
          .slice((pageNumber - 1) * itemsPerPage, pageNumber * itemsPerPage)
          .map((data, index) => <div key={index}>{data.name}</div>)}
    </div>
  );
};

const AssignAuthority = () => {
  const { authority } = useParams("");
  const [dataList, setDataList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [userToken, setUserToken] = useState("");
  const [refreshData, setRefreshData] = useState(true);

  const [columns, setColumns] = useState([
    // { label: "Id", key: "id" },
    { label: "SN", key: "sn" },
    { label: "Name", key: "name" },
    { label: "Email", key: "email" },
    { label: "Authority List", key: "authority" },
    // { label: "Owner", key: "owner.name" },
    // { label: "Detail", key: "detail" },
    { label: "Assign", key: "assignAuthority" },
    { label: "Remove", key: "removeAuthority" },
  ]);

  const assignAuthority = (userId, assign) => {
    console.log("userId", userId);
    console.log("userToken", userToken);

    const urlPathPart1 = assign
      ? "http://localhost:8080/admin/assign-authority?"
      : "http://localhost:8080/admin/remove-authority?";
    const urlPathPart2 =
      authority == "moderator" ? "authority=moderator" : "authority=delivery";
    const path = `${urlPathPart1}${urlPathPart2}&userId=${userId}`;

    // const path =
    //   authority == "moderator"
    //     ? "http://localhost:8080/admin/assign-authority?authority=moderator&userId=" +
    //       userId
    //     : "http://localhost:8080/moderator/assign-authority?authority=delivery&userId=" +
    //       userId;

    console.log("path", path);
    const data = {
      headers: {
        Authorization: userToken,
      },
    };
    axios
      .post(path, data, data)
      .then((res) => {
        toggleRefresh();
        console.log(res.data);
      })
      .catch((err) => {
        console.log("errrrr", err);
      });
  };

  const listUser = () => {
    axios
      .get(`http://localhost:8080/user-list`)
      .then((res) => {
        const updatedData = res.data.map((item, index) => ({
          ...item,
          sn: index + 1,
          authority: item.authoritySet
            .map((it) => it.authority)
            .sort()
            .join(", "),
          detail: "Detail",
          link: "/dashboard/user",
          assignAuthority: (
            //1a56db
            <div
              className="flexmid bor py-[2px] px-2 transition-all border border-[#1a56db] bg-blue-500 hover:bg-blue-700  text-white rounded-md text-sm cursor-pointer"
              onClick={() => assignAuthority(item.id, true)}
            >
              Assign
            </div>
          ),
          removeAuthority: (
            <div
              className="flexmid bor py-[2px] px-2 transition-all border border-[#c81e1e] bg-red-500 hover:bg-red-700  text-white rounded-md text-sm cursor-pointer"
              onClick={() => assignAuthority(item.id, false)}
            >
              Remove
            </div>
          ),
        }));

        setDataList(updatedData);
        setLoading(false);
      })
      .catch((err) => {
        console.log("err", err);
      })
      .finally();
  };

  const toggleRefresh = () => {
    setRefreshData(!refreshData);
  };

  useEffect(() => {
    const loginToken = localStorage.getItem("loginToken");
    if (loginToken) {
      console.log("loginToken", loginToken, true);
      setUserToken(`Bearer ${JSON.parse(loginToken)}`);
      toggleRefresh();
    } else {
      console.log("loginToken", loginToken, false);
    }
  }, []);

  useEffect(() => {
    listUser();
  }, [refreshData]);

  // console.log("authority", authority);
  return (
    <div className="borx h100 bg-[#F5F5F5]">
      <TableWithPagination
        title={`User List - Assign ${authority} authority`}
        data={dataList}
        columns={columns}
        loading={loading}
      />
    </div>
  );
};

export default AssignAuthority;
