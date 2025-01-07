import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const RestaurantCard = () => {
  const { id } = useParams();

  const restaurantt = {
    id: "1569e208-2e3a-477f-8798-d07766665363",
    name: "Dragon Wok",
    description: "Traditional Chinese dishes and dim sum.",
    address: "456 Elm St, Townsville",
    contactNumber: "+1-234-567-8901",
    email: "info@dragonwok.com",
    openingTime: "11:00",
    closingTime: "23:00",
    owner: {
      name: "Owner Two",
      email: "owner2@gmail.com",
    },
    gallery: [
      "/images/image1.jpg",
      "/images/image2.jpg",
      "/images/image3.jpg",
      "/images/image4.jpg",
    ],
  };

  const [loading, setLoading] = useState(true);
  const [restaurant, setRestaurant] = useState({});

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

  useEffect(() => {
    console.log("cat");
    console.log("id::: " + id);
    getRestaurantById(id);
  }, []);

  return (
    <div className="flexcol h100 bor overflow-auto">
      {/* <div className={`${loading?"":"hidden"}`}>Loading...</div> */}
      <div className="">
        {loading ? (
          "loading..."
        ) : (
          <div
            className={` bg-white shadow-lg rounded-lg overflow-hidden border border-gray-200 bor`}
          >
            {/* Header */}
            <div
              className="h-64 bg-cover bg-center"
              style={{ backgroundImage: `url(${restaurant.backgroundUrl})` }}
            >
              <div className="h-full w-full bg-black bg-opacity-50 flex items-center justify-between p-6">
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
            <div className="p-6">
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
            <div className="p-6 bg-gray-50 border-t">
              <h2 className="text-lg font-semibold">Owner Information</h2>
              <p className="text-gray-600">Name: {restaurant.owner.name}</p>
              <p className="text-gray-600">Email: {restaurant.owner.email}</p>
            </div>

            {/* Gallery */}
            <div className="p-6">
              <h2 className="text-lg font-semibold mb-4">Gallery</h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                {restaurant.imageGalleryList.map((image, index) => (
                  <img
                    key={index}
                    src={`http://localhost:8080/image/${image}`}
                    alt={`Gallery ${index + 1}`}
                    className="w-full h-32 object-cover rounded-lg"
                  />
                ))}
              </div>
            </div>

            {/* Menu Categories */}
            <div className="p-6">
              <h2 className="text-lg font-semibold mb-4">Menu</h2>
              {restaurant.menuCategoryResponses.map((category) => (
                <div key={category.id} className="mb-6">
                  <h3 className="text-md font-semibold mb-2">
                    {category.name}
                  </h3>
                  <ul className="space-y-2">
                    {category.menuItemResponseList.map((item) => (
                      <li
                        key={item.id}
                        className="flex justify-between text-gray-700 border-b py-2"
                      >
                        <span>{item.name}</span>
                        <span>NRS {item.price}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default RestaurantCard;
