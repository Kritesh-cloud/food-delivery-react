import React, { useEffect, useState } from "react";
import Navigation from "../navigation/Navigation";
import Footer from "../footer/Footer";
import RestaurantForm from "./RestaurantForm";
import axios from "axios";

const CreateRestaurant = () => {
  const [isCreate, setIsCreate] = useState(true);
  const [userToken, setUserToken] = useState("");

  const onSubmit = (formData) => {
    console.log("formData", formData);
    const formDataCopy = { ...formData };
    delete formDataCopy.icon;
    delete formDataCopy.background;
    delete formDataCopy.gallery;

    const url = "http://localhost:8080/user/account/register-restaurant";
    const headers = {
      headers: {
        Authorization: userToken,
        "Content-Type": "multipart/form-data",
      },
    };
    console.log(headers);
    const newFormData = new FormData();
    const jsonBlob = new Blob([JSON.stringify(formDataCopy)], { type: "application/json" });
    newFormData.append("restaurantInfo", jsonBlob, "data.json");
    // newFormData.append("restaurantInfo", JSON.stringify(formDataCopy),"file.json");
    newFormData.append("icon", formData.icon,"icon.png");
    newFormData.append("background", formData.background,"backgorund.png");
    // newFormData.append("gallery", formData.gallery);
    if (formData.gallery && Array.isArray(formData.gallery)) {
      formData.gallery.forEach((file) => {
        newFormData.append("gallery", file); // Append as "gallery"
      });
    }
    
    for (let [key, value] of newFormData.entries()) {
      console.log(key, value);
    }

    axios
    .post(url, newFormData, headers)
    .then((response) => {
      console.log("Response:", response.data);
    })
    .catch((error) => {
      console.error("Error:", error.response || error.message);
    });

    try {
      if(false)
      fetch(url, {
        method: "POST",
        headers: {
          Authorization: userToken,
          "Content-Type": "multipart/json",
        },
        body: newFormData,
      })
        .then((data) => console.log(data))
        .catch((error) => console.error(error));
    } catch (error) {
      console.error("Error uploading file:", error);
    }
  };

  useEffect(() => {
    const loginToken = localStorage.getItem("loginToken");
    if (loginToken) {
      setUserToken(`Bearer ${JSON.parse(localStorage.getItem("loginToken"))}`);
    }
  }, []);
  return (
    <div className="flexcol">
      <div>
        <Navigation />
      </div>
      <div>
        <RestaurantForm onSubmit={onSubmit} isCreate={isCreate} />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default CreateRestaurant;
