import React from "react";
import Navigation from "../navigation/Navigation";
import Footer from "../footer/Footer";
import RestaurantService from "./RestaurantService";

const Service = () => {
  return (
    <div className="flexcol">
      <div>
        <Navigation />
      </div>
      <div>
        <div className="flexcol bg-gray-50 min-h-screen flex items-center justify-center">
        <div>
          <RestaurantService/>
        </div>
          <div className="max-w-6xl px-6 py-12 bg-white rounded-lg shadow-lg">
            
            <h1 className="text-4xl font-bold text-gray-800 text-center mb-8">
              Our Services
            </h1>
            
            <p className="text-gray-600 text-lg text-center mb-8">
              At{" "}
              <span className="font-semibold text-orange-500">
                Khaja Kart
              </span>
              , we pride ourselves on delivering exceptional services that make
              your food experience seamless and enjoyable.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Service 1 */}
              <div className="p-6 bg-gray-100 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <div className="flex items-center justify-center mb-4">
                  <div className="w-16 h-16 bg-orange-100 text-orange-500 rounded-full flex items-center justify-center text-2xl font-bold">
                    🚚
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-gray-800 text-center mb-2">
                  Fast Delivery
                </h3>
                <p className="text-gray-600 text-center">
                  Get your favorite meals delivered to your doorstep in no time,
                  thanks to our efficient delivery system.
                </p>
              </div>
              {/* Service 2 */}
              <div className="p-6 bg-gray-100 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <div className="flex items-center justify-center mb-4">
                  <div className="w-16 h-16 bg-orange-100 text-orange-500 rounded-full flex items-center justify-center text-2xl font-bold">
                    🍽️
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-gray-800 text-center mb-2">
                  Wide Variety
                </h3>
                <p className="text-gray-600 text-center">
                  Choose from a wide range of restaurants and cuisines to
                  satisfy all your cravings.
                </p>
              </div>
              {/* Service 3 */}
              <div className="p-6 bg-gray-100 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <div className="flex items-center justify-center mb-4">
                  <div className="w-16 h-16 bg-orange-100 text-orange-500 rounded-full flex items-center justify-center text-2xl font-bold">
                    🔒
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-gray-800 text-center mb-2">
                  Secure Payments
                </h3>
                <p className="text-gray-600 text-center">
                  Enjoy a secure and hassle-free payment experience with
                  multiple payment options.
                </p>
              </div>
              {/* Service 4 */}
              <div className="p-6 bg-gray-100 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <div className="flex items-center justify-center mb-4">
                  <div className="w-16 h-16 bg-orange-100 text-orange-500 rounded-full flex items-center justify-center text-2xl font-bold">
                    ⭐
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-gray-800 text-center mb-2">
                  Quality Assurance
                </h3>
                <p className="text-gray-600 text-center">
                  We partner with trusted restaurants to ensure high-quality
                  meals every time.
                </p>
              </div>
              {/* Service 5 */}
              <div className="p-6 bg-gray-100 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <div className="flex items-center justify-center mb-4">
                  <div className="w-16 h-16 bg-orange-100 text-orange-500 rounded-full flex items-center justify-center text-2xl font-bold">
                    🌐
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-gray-800 text-center mb-2">
                  Easy Access
                </h3>
                <p className="text-gray-600 text-center">
                  Access our services anytime, anywhere, through our
                  user-friendly web and mobile platforms.
                </p>
              </div>
              {/* Service 6 */}
              <div className="p-6 bg-gray-100 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <div className="flex items-center justify-center mb-4">
                  <div className="w-16 h-16 bg-orange-100 text-orange-500 rounded-full flex items-center justify-center text-2xl font-bold">
                    💬
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-gray-800 text-center mb-2">
                  24/7 Support
                </h3>
                <p className="text-gray-600 text-center">
                  Our dedicated support team is here to assist you at any time
                  of the day.
                </p>
              </div>
            </div>
          </div>
        </div>
        
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default Service;
