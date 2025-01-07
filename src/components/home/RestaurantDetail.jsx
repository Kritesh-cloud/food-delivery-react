import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import Navigation from "../navigation/Navigation";
import Footer from "../footer/Footer";

const RestaurantDetail = () => {
  const { id } = useParams();
  const [userToken, setUserToken] = useState("");
  const [loading, setLoading] = useState(true);
  const [restaurant, setRestaurant] = useState({});
  const [refresh, setRefresh] = useState({});

  const toggleRefresh = () => {
    setRefresh(!refresh);
  };

  const getRestaurantById = (id) => {
    axios
      .get("http://localhost:8080/list-restaurant-details-by-id/" + id)
      .then((res) => {
        console.log("res.data by id", res.data);
        setRestaurant(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log("err in auth", err);
      })
      .finally();
  };

  const addToCart = (menuItemId) => {
    // id = restaurant id
    /*
    /user/order/add-to-basket/1
    /user/order/get-user-basket
    /user/order/update-item-quantity?menuItemId=2&quantity=4
    /user/order/remove-from-basket/1
    
    */
    console.log("menuItemId", menuItemId);
    const path = `http://localhost:8080/user/order/add-to-basket/${menuItemId}`;
    console.log(path);
    const data = {
      headers: {
        Authorization: userToken,
      },
    };

    axios
      .post(path, data, data)
      .then((res) => {
        console.log(res.data);
        toggleRefresh();
      })
      .catch((err) => {
        console.log("err", err);
      });
  };

  const getUserToken = () => {
    const loginToken = localStorage.getItem("loginToken");
    if (loginToken) {
      setUserToken(`Bearer ${JSON.parse(loginToken)}`);
    } else {
      console.log("loginToken", loginToken, false);
    }
  };
  useEffect(() => {
    getUserToken();
    getRestaurantById(id);
  }, []);

  useEffect(() => {}, []);

  return (
    <div className="flexcol h100 bor overflow-auto">
      <div className="bor fixed w100 bg-white " style={{boxShadow:"2px 0 5px rgba(0,0,0,.5)"}}>
        <Navigation cartRefresh={refresh} />
      </div>
      <div className="mt-[80px]">
        {loading ? (
          "loading..."
        ) : (
          <div
            className={` bg-white shadow-lg rounded-lg overflow-hidden border border-gray-200 bor`}
          >
            {/* Header */}
            <div
              className="h-72 bg-cover bg-center"
              style={{ backgroundImage: `url(${restaurant.backgroundUrl})` }}
            >
              <div className="h-full w-full bg-black bg-opacity-50 flex items-center justify-between p-6 px-40">
                <div className="text-white">
                  <h1 className="text-3xl font-bold">{restaurant.name}</h1>
                  <p className="text-lg">{restaurant.description}</p>
                </div>
                <img
                  src={restaurant.iconUrl}
                  alt="Icon"
                  className="w-16 h-16 rounded-full border-2 border-white"
                />
              </div>
            </div>

            {/* Details */}
            <div className="p-6 px-40">
              <p className="text-gray-700 text-sm mb-4">
                {restaurant.description}
              </p>

              <div className="text-gray-600 text-sm space-y-2">
                <p>
                  <strong>Address:</strong> {restaurant.address}
                </p>
                <p>
                  <strong>Contact:</strong> {restaurant.contactNumber}
                </p>
                <p>
                  <strong>Email:</strong> {restaurant.email}
                </p>
                <p>
                  <strong>Hours:</strong> {restaurant.openingTime} -{" "}
                  {restaurant.closingTime}
                </p>
              </div>
            </div>

            {/* Owner Info */}
            <div className="p-6 bg-gray-50 border-t  px-40">
              <h2 className="text-lg font-semibold">Owner Information</h2>
              <p className="text-gray-600">Name: {restaurant.owner.name}</p>
              <p className="text-gray-600">Email: {restaurant.owner.email}</p>
            </div>

            {/* Gallery */}
            <div className="p-6 px-40">
              <h2 className="text-lg font-semibold mb-4">Gallery</h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                {restaurant.imageGalleryList.map((image, index) => (
                  <img
                    key={index}
                    src={`http://localhost:8080/image/${image}`}
                    alt={`Gallery ${index + 1}`}
                    className="w-full h-40 object-cover rounded-lg"
                  />
                ))}
              </div>
            </div>

            {/* Menu Categories */}
            <div className="p-6 bor px-40 mb-16">
              <h2 className="text-lg font-semibold mb-4">Menu</h2>
              {restaurant.menuCategoryResponses.map((category) => (
                <div key={category.id} className="mb-6">
                  <h3 className="text-md font-semibold mb-2">
                    {category.name}
                  </h3>
                  <ul className="flexcol space-y-2">
                    {category.menuItemResponseList.map((item) => (
                      <li
                        key={item.id}
                        className="flex justify-between text-gray-700 border-b py-2 bor"
                      >
                        <span className="basis-1 grow-[3]">{item.name}</span>
                        <span className="basis-1 grow-[3]">
                          NRS {item.price}
                        </span>
                        <span className="basis-1 grow-[3] flex">
                          <span
                            className="flexmid text-white bg-red-500 border transition-all border-[#c81e1e] hover:bg-red-700 text-sm py-[4px] px-4 rounded cursor-pointer"
                            onClick={() => addToCart(item.id)}
                          >
                            Add To Cart
                          </span>
                        </span>
                        <span className="basis-1 flex-1"></span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default RestaurantDetail;
