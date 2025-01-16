import React from "react";
import { useNavigate } from "react-router-dom";
import restaurantService from "../../assets/images/restaurant_service.jpg"

const RestaurantService = () => {
  const navigate = useNavigate();

  return (
    <section className="bg-gradient-to-r from-orange-100 via-white to-orange-100 py-16 px-8">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-gray-800 mb-4">
          Partner with Us and Grow Your Restaurant!
        </h2>
        <p className="text-lg text-gray-600 mb-8">
          Join our platform to showcase your restaurant and reach thousands of
          food lovers. Create your restaurant profile today and start receiving
          delivery orders through our app. Let us help you grow your business
          with ease!
        </p>

        <div className="flex justify-center bor h-[300px] overflow-hidden">
          <img
            src={restaurantService}
            alt="Restaurant service"
            className="rounded-lg shadow-lg mb-8 "
          />
        </div>

        <p className="text-lg text-gray-600 mb-8">
          By creating a restaurant profile, you'll have access to our powerful
          platform designed to connect you with customers. Accept orders
          effortlessly and enjoy increased visibility for your business. Your
          success is our goal!
        </p>

        <button
          onClick={() => navigate("/restaurant/create")}
          className="bg-orange-500 text-white font-bold py-3 px-6 rounded-lg hover:bg-orange-600 transition-all duration-300"
        >
          Create Your Restaurant
        </button>
      </div>
    </section>
  );
};

export default RestaurantService;
