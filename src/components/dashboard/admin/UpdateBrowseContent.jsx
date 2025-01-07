import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";


const RestaurantCard = ({
  data,
  browseId,
  browseRestaurant,
  refreshData,
  setRefreshData,
}) => {
  const [userToken, setUserToken] = useState("");
  const [userTokenExist, setUserTokenExist] = useState(false);
  // const [refreshData, setRefreshData] = useState(true);

  const addRemoveRestaurant = (id, typeAdd) => {
    console.log("===================================================");
    console.log("addRemoveRestaurant");
    const addPath = `http://localhost:8080/moderator/add-item-to-browse-content?browseContentId=${browseId}&itemId=${id}`;
    const rmvPath = `http://localhost:8080/moderator/remove-item-from-browse-content?browseContentId=${browseId}&itemId=${id}`;
    const path = typeAdd ? addPath : rmvPath;
    console.log("path", path);
    const data = {
      headers: {
        Authorization: userToken,
      },
    };
    console.log("id", id);
    if (userTokenExist) {
      console.log("userTokenExist", userTokenExist);
      console.log("userToken", userToken);
      console.log("header", data);
      axios
        .post(path, data, data)
        .then((res) => {
          console.log(res.data);
          // console.log("browse content update",typeAdd?"add":"rmv",res.data);
          // console.log("toggleRefresh",toggleRefresh);
          setRefreshData(!refreshData)
        })
        .catch((err) => {
          console.log("err", err);
        });
        window.location.reload();
    } else {
    }
  };

  useEffect(() => {
    const loginToken = localStorage.getItem("loginToken");
    if (loginToken) {
      console.log("loginToken", loginToken, true);
      setUserToken(`Bearer ${JSON.parse(loginToken)}`);
      setUserTokenExist(true);
    } else {
      console.log("loginToken", loginToken, false);
    }
  }, []);



  return (
    <div
      className="flex  bg-white shadow-lg rounded-lg overflow-hidden bor w100 py-4 px-6 mb-4 bor"
      style={{ boxShadow: " 0 0 3px #000" }}
    >
      {/* Background Image */}
      <div className="flexmid w-[40%] bg-cover bg-center bor overflow-hidden pr-4">
        <img src={data.backgroundUrl} className="w100 rounded" />
      </div>

      <div className="w-[50%] p-6 bor">
        {/* Icon and Title */}
        <div className="flex items-center mb-4">
          <img
            src={data.iconUrl}
            alt="icon"
            className="w-16 h-16 rounded-full border-2 border-gray-200 mr-4"
          />
          <div>
            <h2 className="text-2xl font-semibold text-gray-800">
              {data.name}
            </h2>
            <p className="text-gray-600">Owned by {data.owner.name}</p>
          </div>
        </div>

        {/* Description */}
        <p className="text-gray-700 mb-4">{data.description}</p>

        {/* Details */}
        <div className="space-y-2">
          <p className="text-gray-600">
            <strong>Address:</strong> {data.address}
          </p>
          <p className="text-gray-600">
            <strong>Contact:</strong> {data.contactNumber}
          </p>
          <p className="text-gray-600">
            <strong>Email:</strong> {data.email}
          </p>
          <p className="text-gray-600">
            <strong>Opening Hours:</strong> {data.openingTime} -{" "}
            {data.closingTime}
          </p>

          <div className="flex bor">
            {browseRestaurant ? (
              <div
                onClick={() => addRemoveRestaurant(data.id, false)}
                className="px-4 py-1 rounded bor cursor-pointer border border-[#e02424] bg-red-500 text-white hover:bg-red-600"
              >
                Remove
              </div>
            ) : (
              <div
                onClick={() => addRemoveRestaurant(data.id, true)}
                className="px-4 py-1 rounded bor cursor-pointer border border-[#1c64f2] bg-blue-500 text-white hover:bg-blue-600"
              >
                Add
              </div>
            )}
          </div>
        </div>
      </div>
      {/* <div className="w-10 borx">

      </div> */}
    </div>
  );
};

const UpdateBrowseContent = () => {
  const [userToken, setUserToken] = useState("");
  const [loading, setLoading] = useState(true);
  const [dataList, setDataList] = useState([]);
  const [revDataList, setRevDataList] = useState([]);
  const [refreshData, setRefreshData] = useState(true);
  const { id } = useParams();

  const getBrowseContent = (id) => {
    console.log("getBrowseContent", dataList);
    axios
      .get("http://localhost:8080/list-restaurant-details/" + id)
      .then((res) => {
        console.log("res details by browse list", res.data);
        setDataList([])
        setDataList(...dataList, res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log("errx" + err);
      });
  };
  const getRevBrowseContent = (id) => {
    console.log("getBrowseContent", dataList);
    axios
      .get("http://localhost:8080/reverse-list-restaurant-details/" + id)
      .then((res) => {
        console.log("res details by browse list", res.data);
        setRevDataList([])
        setRevDataList(...revDataList, res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log("errx" + err);
      });
  };

  const toggleRefresh = () => {
    setRefreshData(!refreshData);
    
  };

  useEffect(() => {
    const loginToken = localStorage.getItem("loginToken");
    if (loginToken) {
      setUserToken(`Bearer ${JSON.parse(localStorage.getItem("loginToken"))}`);
    }
  }, []);

  useEffect(() => {
    getBrowseContent(id - 1);
    getRevBrowseContent(id - 1);
  }, [userToken]);

  

  useEffect(() => {
    // console.log("refreshData",refreshData);
    // window.location.reload();
    // getBrowseContent(id - 1);
    // getRevBrowseContent(id - 1);
  }, [refreshData]);
  return (
    <div className="container mx-auto p-6 bg-white shadow-lg rounded-lg bor h100 overflow-auto">
      <h1 className="text-2xl font-bold mb-3 text-left text-gray-700">
        Restaurant for Browse Content: {id}
      </h1>
      <div className={`${loading ? "" : "hidden"} `}>Loading...</div>
      <div className="flexcol bor">
        {dataList &&
          dataList.length > 0 &&
          dataList.map((item, index) => (
            <div key={index} className="flex bor">
              <RestaurantCard
                data={item}
                browseId={id}
                browseRestaurant={true}
                refreshData={refreshData}
                setRefreshData={setRefreshData}
              />
            </div>
          ))}
        {revDataList &&
          revDataList.length > 0 &&
          revDataList.map((item, index) => (
            <div key={index} className="flex bor">
              <RestaurantCard
                data={item}
                browseId={id}
                browseRestaurant={false}
                refreshData={refreshData}
                setRefreshData={setRefreshData}
              />
            </div>
          ))}
      </div>
    </div>
  );
};

export default UpdateBrowseContent;
